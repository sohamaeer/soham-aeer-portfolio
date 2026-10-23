/**
 * Standalone Express.js Contact Service
 * Demonstrates production Express, PM2 daemon management, CORS, and Nodemailer architecture.
 * Can be run independently on a Linux VPS (e.g. Contabo) or local Node environment:
 * Run: node server/server.js
 */

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Parsing Middleware
app.use(express.json({ limit: "50kb" }));

// Configure CORS for local development and production origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://sohamaeer.vercel.app",
  process.env.CLIENT_URL
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("CORS policy violation: Unauthorized origin."));
      }
    },
    methods: ["POST", "GET", "OPTIONS"],
    credentials: true
  })
);

// Simple rate limiter
const ipRequests = new Map();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

app.use("/api/contact", (req, res, next) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "ip";
  const now = Date.now();
  const current = ipRequests.get(ip);

  if (!current || now - current.time > RATE_LIMIT_WINDOW) {
    ipRequests.set(ip, { count: 1, time: now });
    return next();
  }

  if (current.count >= MAX_REQUESTS) {
    return res.status(429).json({ error: "Rate limit exceeded. Please wait a few minutes." });
  }

  current.count++;
  next();
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "Soham Aeer Express Contact API",
    timestamp: new Date().toISOString()
  });
});

// Contact Submission Handler
app.post("/api/contact", async (req, res) => {
  const { name, email, company, enquiryType, subject, message, honeypot } = req.body;

  // Honeypot trap
  if (honeypot && honeypot.trim() !== "") {
    return res.json({ success: true, message: "Enquiry received." });
  }

  // Validation
  if (!name || name.trim().length < 2) {
    return res.status(400).json({ error: "Valid name is required." });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ error: "Valid email is required." });
  }
  if (!subject || subject.trim().length < 2) {
    return res.status(400).json({ error: "Subject is required." });
  }
  if (!message || message.trim().length < 10) {
    return res.status(400).json({ error: "Message must be at least 10 characters." });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.CONTACT_TO_EMAIL || "sohamayer516@gmail.com";

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.log("Express API received inquiry (mock mode - configure SMTP):", {
      name,
      email,
      company,
      subject
    });
    return res.json({
      success: true,
      mockMode: true,
      message: "Enquiry logged successfully in development mode."
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: smtpUser, pass: smtpPass }
    });

    // Send admin email
    await transporter.sendMail({
      from: `"${name.trim()}" <${smtpUser}>`,
      to: toEmail,
      replyTo: email.trim(),
      subject: `[Express API Portfolio] ${subject.trim()}`,
      text: `From: ${name} (${email})\nCompany: ${company || "N/A"}\nType: ${enquiryType}\n\n${message}`
    });

    // Send confirmation email
    try {
      await transporter.sendMail({
        from: `"Soham Aeer" <${smtpUser}>`,
        to: email.trim(),
        subject: `Thank you for your enquiry | Soham Aeer`,
        text: `Hello ${name},\n\nThank you for reaching out. I have received your enquiry regarding "${subject}" and will respond shortly.\n\nBest regards,\nSoham Aeer`
      });
    } catch (confErr) {
      console.warn("Failed sending user confirmation:", confErr.message);
    }

    return res.json({
      success: true,
      message: "Your message was sent successfully via Express API!"
    });
  } catch (err) {
    console.error("Express mail error:", err);
    return res.status(500).json({ error: "Server mail delivery failed." });
  }
});

// Only listen if executed directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Express contact server running on port ${PORT}`);
  });
}

module.exports = app;

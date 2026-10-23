import nodemailer from "nodemailer";

// In-memory rate limiter (per IP, max 5 requests per 10 minutes)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

// Utility to escape HTML to prevent HTML injection in emails
function escapeHtml(string) {
  if (!string) return "";
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Utility to check against header injection (CRLF characters)
function containsHeaderInjection(string) {
  if (!string) return false;
  return /[\r\n]/.test(string);
}

export async function POST(request) {
  try {
    // 1. Identify Client IP for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown-ip";

    if (isRateLimited(clientIp)) {
      return Response.json(
        { error: "Too many requests. Please wait a few minutes before submitting again." },
        { status: 429 }
      );
    }

    // 2. Parse Body
    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Invalid JSON payload." }, { status: 400 });
    }

    const {
      name,
      email,
      company = "",
      enquiryType,
      subject,
      message,
      honeypot = ""
    } = body;

    // 3. Honeypot Anti-Spam Check
    if (honeypot && honeypot.trim() !== "") {
      // Bot trapped; return success without sending
      return Response.json({
        success: true,
        message: "Enquiry received."
      });
    }

    // 4. Server-Side Validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.length > 100) {
      return Response.json({ error: "Please provide a valid name (2 to 100 characters)." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!enquiryType || typeof enquiryType !== "string") {
      return Response.json({ error: "Please select an enquiry type." }, { status: 400 });
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 2 || subject.length > 150) {
      return Response.json({ error: "Please provide a valid subject (2 to 150 characters)." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 10 || message.length > 5000) {
      return Response.json({ error: "Message must be between 10 and 5,000 characters." }, { status: 400 });
    }

    // 5. Header injection checks
    if (
      containsHeaderInjection(name) ||
      containsHeaderInjection(email) ||
      containsHeaderInjection(subject) ||
      containsHeaderInjection(enquiryType) ||
      (company && containsHeaderInjection(company))
    ) {
      return Response.json({ error: "Invalid characters detected in header fields." }, { status: 400 });
    }

    // 6. Check SMTP Credentials
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL || "sohamayer516@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || `"Soham Aeer Portfolio" <${smtpUser || "notifications@sohamaeer.com"}>`;

    if (!smtpHost || !smtpUser || !smtpPass) {
      // Safe development fallback: Log sanitized content to server console and inform client truthfully
      console.warn("⚠️ SMTP credentials not configured. Form submission payload logged for local verification:", {
        from: name,
        email,
        company,
        enquiryType,
        subject,
        timestamp: new Date().toISOString()
      });

      return Response.json({
        success: true,
        mockMode: true,
        message: "Thank you for reaching out! (Note: Server running in development mode without active SMTP credentials. Your message was validated and recorded)."
      });
    }

    // 7. Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "long"
    });

    const cleanName = escapeHtml(name.trim());
    const cleanEmail = escapeHtml(email.trim());
    const cleanCompany = company ? escapeHtml(company.trim()) : "Not Specified";
    const cleanEnquiryType = escapeHtml(enquiryType.trim());
    const cleanSubject = escapeHtml(subject.trim());
    const cleanMessage = escapeHtml(message.trim());

    // 8. Email 1: Notification to Soham Aeer
    const adminMailOptions = {
      from: fromEmail,
      to: toEmail,
      replyTo: `${name.trim()} <${email.trim()}>`,
      subject: `[Portfolio Enquiry] ${cleanSubject} — from ${cleanName}`,
      text: `New Portfolio Enquiry Received:
Name: ${name.trim()}
Email: ${email.trim()}
Company: ${company.trim() || "Not specified"}
Enquiry Type: ${enquiryType.trim()}
Subject: ${subject.trim()}
Timestamp: ${timestamp}
IP Address: ${clientIp}

Message:
${message.trim()}
`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0B0D12; color: #F5F7FB; margin: 0; padding: 24px; }
            .card { background-color: #12161F; border: 1px solid #232B3C; border-radius: 12px; padding: 28px; max-width: 600px; margin: 0 auto; }
            .badge { display: inline-block; background-color: #7C3AED; color: #FFFFFF; font-size: 12px; font-weight: bold; padding: 4px 10px; border-radius: 9999px; }
            h2 { color: #F5F7FB; margin-top: 12px; font-size: 20px; border-bottom: 1px solid #232B3C; padding-bottom: 12px; }
            .field-row { margin-bottom: 12px; font-size: 14px; }
            .field-label { color: #94A3B8; font-weight: 600; width: 130px; display: inline-block; }
            .field-value { color: #F5F7FB; font-weight: 500; }
            .message-box { background-color: #0B0D12; border: 1px solid #232B3C; border-radius: 8px; padding: 16px; margin-top: 18px; color: #E2E8F0; line-height: 1.6; white-space: pre-wrap; }
            .footer { margin-top: 24px; font-size: 12px; color: #64748B; text-align: center; }
          </style>
        </head>
        <body>
          <div class="card">
            <span class="badge">NEW PORTFOLIO INQUIRY</span>
            <h2>${cleanSubject}</h2>
            <div class="field-row"><span class="field-label">Sender Name:</span><span class="field-value">${cleanName}</span></div>
            <div class="field-row"><span class="field-label">Sender Email:</span><span class="field-value"><a href="mailto:${cleanEmail}" style="color: #3B82F6;">${cleanEmail}</a></span></div>
            <div class="field-row"><span class="field-label">Company:</span><span class="field-value">${cleanCompany}</span></div>
            <div class="field-row"><span class="field-label">Enquiry Type:</span><span class="field-value">${cleanEnquiryType}</span></div>
            <div class="field-row"><span class="field-label">Received At:</span><span class="field-value">${timestamp}</span></div>
            <div class="field-row"><span class="field-label">Client IP:</span><span class="field-value">${clientIp}</span></div>
            
            <h3 style="color: #F5F7FB; font-size: 15px; margin-top: 20px; margin-bottom: 8px;">Message:</h3>
            <div class="message-box">${cleanMessage}</div>

            <div class="footer">
              Automated transmission from Soham Aeer Portfolio System (Virar, India).
            </div>
          </div>
        </body>
        </html>
      `
    };

    // 9. Email 2: Confirmation receipt to the Enquirer
    const confirmationMailOptions = {
      from: fromEmail,
      to: email.trim(),
      replyTo: toEmail,
      subject: `Thank you for reaching out, ${name.trim()} | Soham Aeer`,
      text: `Hello ${name.trim()},

Thank you for contacting me through my portfolio website.

I have received your enquiry regarding "${subject.trim()}" and will review it carefully. I look forward to connecting with you soon.

Summary of your message:
Subject: ${subject.trim()}
Type: ${enquiryType.trim()}
Message: ${message.trim()}

Best regards,
Soham Aeer
Full Stack Developer | React.js | Next.js | Node.js | DevOps
Virar, Maharashtra, India
Email: sohamayer516@gmail.com
Phone: +91 9322577858
GitHub: https://github.com/sohamaeer/
LinkedIn: https://www.linkedin.com/in/soham-aeer/
`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0B0D12; color: #F5F7FB; margin: 0; padding: 24px; }
            .card { background-color: #12161F; border: 1px solid #232B3C; border-radius: 12px; padding: 32px; max-width: 600px; margin: 0 auto; }
            h2 { color: #F5F7FB; margin-top: 0; font-size: 22px; }
            p { color: #CBD5E1; font-size: 15px; line-height: 1.7; }
            .recap-box { background-color: #0B0D12; border: 1px solid #232B3C; border-radius: 8px; padding: 18px; margin: 20px 0; }
            .recap-title { color: #3B82F6; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; }
            .sign-off { margin-top: 28px; padding-top: 20px; border-top: 1px solid #232B3C; }
            .sign-name { font-weight: bold; color: #F5F7FB; font-size: 16px; }
            .sign-title { font-size: 13px; color: #22D3EE; margin-top: 2px; }
            .sign-links { font-size: 13px; color: #94A3B8; margin-top: 8px; }
            .sign-links a { color: #3B82F6; text-decoration: none; margin-right: 12px; }
          </style>
        </head>
        <body>
          <div class="card">
            <h2>Thank You for Getting in Touch</h2>
            <p>Hello <strong>${cleanName}</strong>,</p>
            <p>I have received your enquiry regarding <strong>"${cleanSubject}"</strong>. Thank you for your interest in my work. I will review your message and reply as soon as possible.</p>
            
            <div class="recap-box">
              <div class="recap-title">Enquiry Summary</div>
              <div style="font-size: 14px; color: #CBD5E1; margin-bottom: 6px;"><strong>Enquiry Type:</strong> ${cleanEnquiryType}</div>
              <div style="font-size: 14px; color: #CBD5E1; margin-bottom: 10px;"><strong>Subject:</strong> ${cleanSubject}</div>
              <div style="font-size: 13px; color: #94A3B8; font-style: italic; white-space: pre-wrap;">"${cleanMessage}"</div>
            </div>

            <div class="sign-off">
              <div class="sign-name">Soham Aeer</div>
              <div class="sign-title">Full Stack Developer | React.js | Next.js | Node.js | DevOps & VPS</div>
              <div class="sign-links">
                <a href="https://github.com/sohamaeer/">GitHub</a>
                <a href="https://www.linkedin.com/in/soham-aeer/">LinkedIn</a>
                <a href="mailto:sohamayer516@gmail.com">sohamayer516@gmail.com</a>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // 10. Dispatch Emails & Handle Partial Delivery
    let adminDelivered = false;
    let confirmationDelivered = false;

    try {
      await transporter.sendMail(adminMailOptions);
      adminDelivered = true;
    } catch (adminErr) {
      console.error("Failed to send admin notification email:", adminErr.message);
      return Response.json(
        { error: "Unable to deliver inquiry message right now. Please email directly at sohamayer516@gmail.com." },
        { status: 500 }
      );
    }

    try {
      await transporter.sendMail(confirmationMailOptions);
      confirmationDelivered = true;
    } catch (confirmErr) {
      console.warn("Admin email sent, but confirmation email to enquirer failed:", confirmErr.message);
    }

    if (adminDelivered && !confirmationDelivered) {
      return Response.json({
        success: true,
        partial: true,
        message: "Your message was successfully received by Soham! (Note: Automated confirmation receipt could not be delivered to your inbox)."
      });
    }

    return Response.json({
      success: true,
      message: "Thank you! Your message has been sent successfully, and a confirmation receipt has been dispatched to your email."
    });

  } catch (error) {
    console.error("Unexpected error in contact route handler:", error);
    return Response.json(
      { error: "An unexpected server error occurred. Please reach out via email directly." },
      { status: 500 }
    );
  }
}

"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    enquiryType: "Full-Stack Project",
    subject: "",
    message: "",
    honeypot: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "", isPartial: false });

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name (at least 2 characters).";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 2) {
      newErrors.subject = "Please enter a subject (at least 2 characters).";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus({ state: "loading", message: "", isPartial: false });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to deliver message. Please try again or email directly.");
      }

      setStatus({
        state: "success",
        message: data.message || "Thank you! Your message has been sent successfully.",
        isPartial: !!data.partial
      });

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        company: "",
        enquiryType: "Full-Stack Project",
        subject: "",
        message: "",
        honeypot: ""
      });
    } catch (err) {
      setStatus({
        state: "error",
        message: err.message || "Something went wrong. Please email directly at sohamayer516@gmail.com.",
        isPartial: false
      });
    }
  };

  return (
    <div className="contact-form-card">
      <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "8px" }}>
        Send an Enquiry
      </h3>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "24px" }}>
        Have an upcoming web development project, a VPS infrastructure requirement, or a full-time role? Fill in the details below.
      </p>

      {status.state === "success" && (
        <div className="alert-box alert-success" role="status">
          <strong>Message Received:</strong> {status.message}
        </div>
      )}

      {status.state === "error" && (
        <div className="alert-box alert-error" role="alert">
          <strong>Submission Error:</strong> {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        {/* Anti-spam honeypot */}
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="hp_field">Do not fill this field</label>
          <input
            type="text"
            id="hp_field"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="form-grid-2">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Your Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className={`form-input ${errors.name ? "error" : ""}`}
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <span id="name-error" className="form-error-msg">{errors.name}</span>}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Your Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. rahul@example.com"
              className={`form-input ${errors.email ? "error" : ""}`}
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <span id="email-error" className="form-error-msg">{errors.email}</span>}
          </div>
        </div>

        <div className="form-grid-2">
          {/* Company Field */}
          <div className="form-group">
            <label htmlFor="company" className="form-label">
              Company / Organization <span style={{ color: "var(--text-muted)", fontWeight: "normal" }}>(Optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Acme Corp"
              className="form-input"
            />
          </div>

          {/* Enquiry Type Field */}
          <div className="form-group">
            <label htmlFor="enquiryType" className="form-label">
              Enquiry Type <span className="required">*</span>
            </label>
            <select
              id="enquiryType"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Full-Stack Project">Full-Stack Web Development</option>
              <option value="DevOps & VPS Deployment">DevOps, VPS & Domain DNS Setup</option>
              <option value="Technical & On-Page SEO">Technical & On-Page SEO (AI-Assisted)</option>
              <option value="Shopify Headless Commerce">Headless E-Commerce / Shopify</option>
              <option value="AI / LLM API Integration">AI & LLM API Integration</option>
              <option value="Full-Time / Contract Hiring">Full-Time / Contract Role</option>
              <option value="Other Consultation">Other Discussion</option>
            </select>
          </div>
        </div>

        {/* Subject Field */}
        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject <span className="required">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Next.js Web Application & VPS Deployment"
            className={`form-input ${errors.subject ? "error" : ""}`}
            required
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && <span id="subject-error" className="form-error-msg">{errors.subject}</span>}
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message Details <span className="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please share project requirements, expected timeline, tech stack specifications, or role details..."
            className={`form-textarea ${errors.message ? "error" : ""}`}
            required
            rows={5}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && <span id="message-error" className="form-error-msg">{errors.message}</span>}
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg"
          disabled={status.state === "loading"}
          style={{ width: "100%", marginTop: "8px" }}
        >
          {status.state === "loading" ? (
            <span>Sending Message...</span>
          ) : (
            <span>Send Message ↗</span>
          )}
        </button>

        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", textAlign: "center", marginTop: "4px" }}>
          Protected by honeypot anti-spam. Your email is used solely to reply to your enquiry.
        </p>
      </form>
    </div>
  );
}

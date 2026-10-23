"use client";

import { personalInfo } from "@/data/personalInfo";

export default function WhatsAppButton() {
  // Clean phone number for WhatsApp wa.me link: 919322577858
  const cleanPhone = personalInfo.phone.replace(/[^0-9]/g, "");
  const defaultMessage = encodeURIComponent(
    `Hello Soham! I viewed your portfolio and would like to discuss a full-stack opportunity.`
  );
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${defaultMessage}`;

  return (
    <aside aria-label="Direct WhatsApp Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-whatsapp-btn"
        aria-label="Chat with Soham Aeer on WhatsApp"
        title="Chat with Soham on WhatsApp"
      >
        <span className="whatsapp-tooltip">Chat on WhatsApp</span>
        <div className="whatsapp-icon-wrapper">
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="#FFFFFF"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.71C7.02 10.93 7.91 12.11 8.03 12.28C8.16 12.44 9.77 14.94 12.25 16C12.84 16.26 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 13.98C16.32 13.86 15.12 13.27 14.9 13.19C14.67 13.1 14.51 13.06 14.35 13.31C14.18 13.55 13.71 14.11 13.57 14.27C13.42 14.44 13.28 14.46 13.03 14.33C12.79 14.21 12 13.95 11.05 13.11C10.32 12.45 9.82 11.64 9.68 11.39C9.53 11.15 9.66 11.01 9.79 10.89C9.9 10.78 10.03 10.6 10.16 10.45C10.28 10.3 10.32 10.2 10.4 10.03C10.49 9.87 10.45 9.73 10.39 9.6C10.32 9.48 9.77 8.12 9.54 7.58C9.32 7.05 9.1 7.12 8.94 7.11L8.53 7.33Z" />
          </svg>
        </div>
      </a>
    </aside>
  );
}
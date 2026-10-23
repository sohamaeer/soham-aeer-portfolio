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
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.044-.99-.069-.64-.206-1.503-.667-2.508-1.558-1.272-1.127-2.023-2.502-2.185-2.736-.162-.234-.41-.546-.41-.89 0-.344.179-.514.243-.585.064-.071.14-.089.186-.089.046 0 .092.002.132.004.095.006.14.015.202.164.067.162.23 1.115.25 1.156.02.041.034.091.007.145-.027.054-.04.089-.08.136-.04.047-.085.105-.121.141-.041.041-.084.086-.036.168.048.082.213.351.458.569.317.282.585.37.668.411.083.041.132.034.181-.023.049-.057.21-.244.266-.328.056-.084.112-.07.189-.041.077.029.49.231.574.273.084.042.14.063.161.098.021.035.021.516-.123.921zm-3.392-12.416c-5.523 0-10 4.477-10 10 0 1.77.461 3.435 1.265 4.887l-1.345 4.913 5.041-1.322c1.405.768 3.013 1.21 4.721 1.21 5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.225c-1.587 0-3.056-.474-4.288-1.289l-.307-.202-3.181.834.848-3.098-.222-.353c-.89-1.417-1.364-3.064-1.364-4.757 0-4.664 3.795-8.459 8.464-8.459 4.668 0 8.463 3.795 8.463 8.459 0 4.665-3.795 8.46-8.464 8.46z"/>
          </svg>
        </div>
      </a>
    </aside>
  );
}
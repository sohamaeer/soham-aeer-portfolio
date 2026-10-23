import JsonLd from "./JsonLd";

export default function FAQSection({ faqs = [], title = "Frequently Asked Questions", subtitle, includeSchema = true }) {
  if (!faqs || faqs.length === 0) return null;

  const faqSchema = includeSchema ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <section className="faq-section" aria-label={title}>
      {faqSchema && <JsonLd data={faqSchema} />}
      
      <div style={{ marginBottom: "24px" }}>
        <h3 className="section-title" style={{ fontSize: "1.6rem", marginBottom: "8px" }}>
          {title}
        </h3>
        {subtitle && <p className="section-desc" style={{ fontSize: "0.98rem" }}>{subtitle}</p>}
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details key={index} className="faq-item" open={index === 0}>
            <summary className="faq-question">
              <span>{faq.question}</span>
              <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

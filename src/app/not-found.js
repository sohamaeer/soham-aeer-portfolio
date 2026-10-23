import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | Soham Aeer",
  description: "The requested page could not be located on this portfolio.",
  robots: {
    index: false,
    follow: true
  }
};

export default function NotFound() {
  return (
    <div className="container" style={{ padding: "120px 20px", textAlign: "center" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <span className="badge badge-purple" style={{ marginBottom: "16px" }}>
          HTTP 404 Status
        </span>
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, marginBottom: "16px" }}>
          Route Not Found
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "32px" }}>
          The page or resource you requested does not exist or has been relocated. You can navigate back to the home page or browse the project portfolio.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary btn-lg">
            Return to Home
          </Link>
          <Link href="/projects" className="btn btn-secondary btn-lg">
            Browse Projects
          </Link>
          <Link href="/skills" className="btn btn-outline btn-lg">
            Explore Skills Hub
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import JsonLd from "./JsonLd";
import { personalInfo } from "@/data/personalInfo";

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `${personalInfo.siteUrl}${item.href}` : undefined
    }))
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <nav aria-label="Breadcrumb">
        <ol className="breadcrumbs">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index}>
                {index > 0 && <span aria-hidden="true">/</span>}
                {isLast || !item.href ? (
                  <span className="current" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

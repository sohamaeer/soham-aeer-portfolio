import { personalInfo } from "@/data/personalInfo";

export default function robots() {
  const baseUrl = personalInfo.siteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"]
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}

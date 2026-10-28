import { MetadataRoute } from "next";
import { COMPANY_CONFIG } from "@/lib/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${COMPANY_CONFIG.siteUrl}/sitemap.xml`,
  };
}

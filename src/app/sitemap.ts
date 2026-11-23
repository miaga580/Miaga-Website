import { MetadataRoute } from "next";
import { COMPANY_CONFIG } from "@/lib/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_CONFIG.siteUrl;
  const routes = [
    "",
    "/services",
    "/about",
    "/contact",
    "/privacy",
    "/eula",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/privacy" || route === "/eula" || route === "/contact" ? 0.9 : 0.8,
  }));
}

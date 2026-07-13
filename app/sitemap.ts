import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";
import { frameworks } from "@/src/content/frameworks";
import { getAllEssays } from "@/src/content/ideas";

const siteLastUpdated = new Date("2026-03-17");

const staticRoutes = [
  { path: "", priority: 1 },
  { path: "/work-with-me", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/supervision", priority: 0.7 },
  { path: "/consultation", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/frameworks", priority: 0.8 },
  { path: "/ideas", priority: 0.8 },
  { path: "/services", priority: 0.7 },
  { path: "/perfectionism", priority: 0.9 },
  { path: "/religious-harm", priority: 0.9 },
  { path: "/overcontrol", priority: 0.9 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
  { path: "/consumer-protection", priority: 0.3 },
  { path: "/good-faith-estimate", priority: 0.3 },
  { path: "/accessibility", priority: 0.3 }
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const essayRoutes = getAllEssays().map((essay) => ({
    url: `${siteConfig.siteUrl}/ideas/${essay.slug}`,
    lastModified: new Date(essay.date),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));
  const frameworkRoutes = frameworks.map((framework) => ({
    url: `${siteConfig.siteUrl}/frameworks/${framework.slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.siteUrl}${route.path}`,
    lastModified: siteLastUpdated,
    changeFrequency: "monthly" as const,
    priority: route.priority
  }));

  return [...staticEntries, ...essayRoutes, ...frameworkRoutes];
}

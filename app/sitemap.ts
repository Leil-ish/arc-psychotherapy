import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";
import { frameworks } from "@/src/content/frameworks";
import { getAllEssays } from "@/src/content/ideas";

const staticRoutes = [
  "",
  "/start-here",
  "/work-with-me",
  "/about",
  "/services",
  "/constructive",
  "/fees",
  "/faq",
  "/contact",
  "/frameworks",
  "/ideas",
  "/perfectionism",
  "/religious-harm",
  "/overcontrol",
  "/privacy",
  "/terms",
  "/consumer-protection",
  "/good-faith-estimate",
  "/accessibility"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const essayRoutes = getAllEssays().map((essay) => `/ideas/${essay.slug}`);
  const frameworkRoutes = frameworks.map((framework) => `/frameworks/${framework.slug}`);

  return [...staticRoutes, ...essayRoutes, ...frameworkRoutes].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7
  }));
}

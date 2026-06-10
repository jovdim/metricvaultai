import type { MetadataRoute } from "next";

const BASE = "https://metricvaultai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${BASE}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}

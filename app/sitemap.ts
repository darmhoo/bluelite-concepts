import type { MetadataRoute } from "next";

const BASE_URL = "https://blueliteconceptltd.com";

const routes = [
  "",
  "/about",
  "/services",
  "/pet-bottles",
  "/pet-flakes",
  "/pet-shredding",
  "/pet-washing",
  "/our-process",
  "/export-logistics",
  "/contact",
  "/quote",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}

import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

const routes = [
  "",
  "o-rozgrywce",
  "najczestsze-pytania",
  "aktualizacje",
  "dostepnosc",
  "kontakt",
  "regulamin",
  "polityka-prywatnosci",
  "polityka-cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${site.baseUrl}/${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}

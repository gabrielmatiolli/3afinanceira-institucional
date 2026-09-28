import type { MetadataRoute } from "next";
import { empresa } from "@/lib/empresa";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/politica-de-privacidade/", "/termos-de-uso/"].map((caminho) => ({
    url: `${empresa.site}${caminho}`,
    changeFrequency: "monthly",
    priority: caminho === "/" ? 1 : 0.3,
  }));
}

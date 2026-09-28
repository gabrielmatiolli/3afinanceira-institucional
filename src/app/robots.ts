import type { MetadataRoute } from "next";
import { empresa } from "@/lib/empresa";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${empresa.site}/sitemap.xml`,
  };
}

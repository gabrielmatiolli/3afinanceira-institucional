import type { NextConfig } from "next";

// Exportação estática: o site é publicado no Cloudflare Pages como HTML puro.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

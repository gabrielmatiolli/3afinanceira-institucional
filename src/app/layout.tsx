import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Newsreader, Sora } from "next/font/google";
import { empresa } from "@/lib/empresa";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const descricao =
  "Cobrança extrajudicial de pessoas físicas e jurídicas inadimplentes para empresas de todos os setores, em todo o Brasil. Negociação firme, dentro da lei.";

export const metadata: Metadata = {
  metadataBase: new URL(empresa.site),
  title: {
    default: "3A Soluções | Cobrança extrajudicial para empresas",
    template: "%s | 3A Soluções",
  },
  description: descricao,
  applicationName: "3A Soluções",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "3A Soluções",
    title: "3A Soluções | Cobrança extrajudicial para empresas",
    description: descricao,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "3A Soluções" }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0A2240",
};

const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: empresa.nomeFantasia,
  legalName: empresa.razaoSocial,
  taxID: empresa.cnpj,
  foundingDate: String(empresa.fundacao),
  url: empresa.site,
  logo: `${empresa.site}/marca/favicon-512px.png`,
  email: empresa.email,
  telephone: "+55 62 9925-7376",
  areaServed: "BR",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${empresa.endereco.logradouro}, ${empresa.endereco.complemento}, ${empresa.endereco.bairro}`,
    addressLocality: empresa.endereco.cidade,
    addressRegion: empresa.endereco.uf,
    postalCode: empresa.endereco.cep,
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${newsreader.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marca o documento como "com JS" antes da pintura, para as revelações no scroll. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}

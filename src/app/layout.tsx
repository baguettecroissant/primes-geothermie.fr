import type { Metadata } from "next";
import { Sora, Karla, Fira_Code } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const BASE_URL = "https://www.primes-geothermie.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Primes Géothermie 2026 — MaPrimeRénov', CEE et Aides | primes-geothermie.fr",
    template: "%s | primes-geothermie.fr",
  },
  description:
    "Toutes les aides pour la géothermie en 2026 : MaPrimeRénov' (jusqu'à 11 000€), CEE, éco-PTZ, TVA 5,5%. Simulez vos aides et trouvez un installateur RGE.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "Primes Géothermie",
    title: "Primes Géothermie 2026 — MaPrimeRénov', CEE et Aides",
    description: "Toutes les aides pour la géothermie en 2026 : MaPrimeRénov', CEE, éco-PTZ, TVA 5,5%.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Primes Géothermie 2026 — Aides et Subventions",
    description: "Simulez vos aides pour la géothermie en 2026.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Primes Géothermie",
        url: BASE_URL,
        description: "Guide complet des aides et primes pour la géothermie en France.",
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Primes Géothermie",
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "fr-FR",
      },
    ],
  };

  return (
    <html lang="fr" className={`${sora.variable} ${karla.variable} ${firaCode.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-sans antialiased bg-bg text-text min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

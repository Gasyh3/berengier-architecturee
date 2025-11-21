import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://berengier-architecture.vercel.app"),
  title: {
    default: "Bérengier Architecture | Architecte à Lyon · Plans & Rendus 3D",
    template: "%s | Bérengier Architecture"
  },
  description:
    "Bérengier Architecture accompagne les entreprises du bâtiment à Lyon et en France : plans techniques, relevés, modélisations BIM et rendus 3D photoréalistes.",
  keywords: [
    "Bérengier",
    "Berengier architecture",
    "architecte lyon",
    "architecte d'intérieur lyon",
    "plans techniques lyon",
    "rendus 3D lyon",
    "atelier berengier",
    "architecte indépendant lyon"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Bérengier Architecture | Architecte à Lyon · Plans & Rendus 3D",
    description:
      "Plans techniques, relevés et rendus 3D pour les professionnels du bâtiment à Lyon et partout en France.",
    url: "https://atelier-berengier.fr",
    siteName: "Bérengier Architecture",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/assets/3D/14ce0d00-514b-4e02-988d-92754cbed77b.png",
        width: 1200,
        height: 630,
        alt: "Rendu 3D par Bérengier Architecture"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bérengier Architecture | Architecte à Lyon · Plans & Rendus 3D",
    description:
      "Architecte indépendant basé à Lyon : plans techniques, modélisations et rendus 3D pour entreprises du bâtiment.",
    images: ["/assets/3D/14ce0d00-514b-4e02-988d-92754cbed77b.png"]
  },
  icons: {
    icon: "/assets/favicon.ico"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Architect",
  name: "Bérengier Architecture",
  url: "https://atelier-berengier.fr",
  image: "https://atelier-berengier.fr/assets/logo/noir_sf.png",
  description:
    "Architecte indépendant à Lyon spécialisé en plans techniques, relevés de chantier et rendus 3D photoréalistes.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lyon",
    addressCountry: "FR"
  },
  areaServed: ["Lyon", "Auvergne-Rhône-Alpes", "France"],
  telephone: "+33671234589",
  email: "contact@atelier-berengier.fr",
  sameAs: [],
  founder: {
    "@type": "Person",
    name: "Bérengier"
  }
} as const;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

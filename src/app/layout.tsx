import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.azhar-plastics.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/azhar-cons-logo.png",
    shortcut: "/azhar-cons-logo.png",
    apple: "/azhar-cons-logo.png",
  },
  title: {
    default: "Azhar Plastics | Exclusive Plastics & Packaging Representation in Morocco",
    template: "%s | Azhar Plastics",
  },
  description:
    "Azhar Plastics is the exclusive representative in Morocco and North Africa for world-leading manufacturers including Nexeo Plastics, Reifenhäuser, Otto Systems, Kiefel, and Uniloy. Providing raw materials, extrusion, blow molding, thermoforming, and PET technologies.",
  keywords: [
    "Azhar Plastics",
    "plastiques Maroc",
    "plastic machinery Morocco",
    "Nexeo Plastics Morocco",
    "Reifenhäuser Maroc",
    "Otto Systems Morocco",
    "Kiefel Morocco",
    "Uniloy Morocco",
    "matières premières plastiques",
    "extrusion film soufflé",
    "thermoformage Maroc",
    "emballage industriel Maroc",
    "PET preform Morocco",
    "représentant exclusif plastiques",
    "polymères industriels Maroc",
    "plastics raw materials North Africa",
    "packaging machinery Morocco",
    "industrial plastics Casablanca",
    "Mohammedia industry",
    "Azhar Cons SARL",
  ],
  authors: [{ name: "Azhar Plastics", url: siteUrl }],
  creator: "Azhar Plastics",
  publisher: "Azhar Cons SARL",
  category: "Industrial B2B",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": `${siteUrl}/en`,
      "fr-FR": `${siteUrl}/fr`,
      "ar-MA": `${siteUrl}/ar`,
      "de-DE": `${siteUrl}/de`,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Azhar Plastics",
    locale: "en_US",
    alternateLocale: ["fr_FR", "ar_MA", "de_DE"],
    title: "Azhar Plastics — Redefining Plastics Production in Morocco & North Africa",
    description:
      "Exclusive representation for Nexeo Plastics, Reifenhäuser, Kiefel, Otto Systems & Uniloy. Premium plastics raw materials and advanced processing technologies.",
    images: [
      {
        url: "/azhar-plastic.png",
        width: 1200,
        height: 630,
        alt: "Azhar Plastics - Industrial Plastics Representation Morocco",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azhar Plastics | Plastics & Packaging Leaders — Morocco",
    description:
      "Exclusive representative for world-class plastics & packaging manufacturers in Morocco and North Africa.",
    images: ["/azhar-plastic.png"],
    creator: "@azharplastics",
  },
  other: {
    "geo.region": "MA",
    "geo.placename": "Mohammedia, Morocco",
    "geo.position": "33.6861;-7.3828",
    "ICBM": "33.6861, -7.3828",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Azhar Plastics",
  url: siteUrl,
  logo: `${siteUrl}/azhar-cons-logo.png`,
  description:
    "Exclusive representative in Morocco and North Africa for world-leading plastics raw material and processing technology manufacturers.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kamal Park Center Imm B, Bureau 30",
    addressLocality: "Mohammedia",
    addressCountry: "MA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+212-521-226-130",
    contactType: "sales",
    email: "info@azhar-cons.com",
    areaServed: ["MA", "DZ", "TN", "LY", "EG"],
    availableLanguage: ["French", "Arabic", "English", "German"],
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Azhar Cons SARL",
    url: "https://www.azhar-cons.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/azhar-plastics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${cairo.variable} font-sans min-h-full flex flex-col antialiased`}
        suppressHydrationWarning
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

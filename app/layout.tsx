import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Accounting, Tax & VAT Agency in Dubai`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "accounting services Dubai",
    "tax agency UAE",
    "UAE corporate tax",
    "corporate tax registration UAE",
    "corporate tax return filing",
    "corporate tax Free Zone QFZP",
    "VAT registration Dubai",
    "VAT return filing UAE",
    "bookkeeping Dubai",
    "FTA approved tax agent",
    "Accotax",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Accounting, Tax & VAT Agency in Dubai`,
    description: site.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — FTA-Approved Tax Agency, Dubai`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Accounting, Tax & VAT Agency in Dubai`,
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "LocalBusiness"],
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email.primary,
    telephone: site.phones[0].display,
    image: `${site.url}/og.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office No. 806, 8th Floor, Al Masraf Tower, Baniyas Road",
      addressLocality: "Deira",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2693,
      longitude: 55.3095,
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [site.social.facebook, site.social.linkedin].filter(Boolean),
  };

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <Analytics />
      </body>
    </html>
  );
}

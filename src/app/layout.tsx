import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | BodyWRX Physical Therapy & Wellness",
    default: "BodyWRX Physical Therapy & Wellness | Concierge PT in Tampa",
  },
  description:
    "Concierge physical therapy in Tampa, FL. One-on-one treatment for TMJ, back pain, plantar fasciitis, and sports injuries with Dr. Mancuso. By appointment.",
  metadataBase: new URL("https://bodywrxpt.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BodyWRX Physical Therapy & Wellness",
    title: "BodyWRX Physical Therapy & Wellness | Concierge PT in Tampa",
    description:
      "Concierge physical therapy in Tampa, FL. One-on-one treatment for TMJ, back pain, plantar fasciitis, and sports injuries with Dr. Mancuso. By appointment.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BodyWRX Physical Therapy & Wellness -- Where recovery meets performance.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BodyWRX Physical Therapy & Wellness | Concierge PT in Tampa",
    description:
      "Concierge physical therapy in Tampa, FL. One-on-one treatment for TMJ, back pain, plantar fasciitis, and sports injuries with Dr. Mancuso. By appointment.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#1C1C1A",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data for the business
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://bodywrxpt.com/#business",
  name: "BodyWRX Physical Therapy & Wellness",
  description:
    "Premium concierge physical therapy practice in Tampa offering one-on-one treatment, personalized recovery, and performance-driven results.",
  url: "https://bodywrxpt.com",
  telephone: "+1-336-420-9360",
  email: "dralexandramancuso@gmail.com",
  priceRange: "$$$",
  image: "https://bodywrxpt.com/og-image.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4221 W Boy Scout Blvd, Suite 170",
    addressLocality: "Tampa",
    addressRegion: "FL",
    postalCode: "33607",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.9536,
    longitude: -82.5175,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "09:00",
    closes: "17:00",
  },
  areaServed: {
    "@type": "City",
    name: "Tampa",
    sameAs: "https://en.wikipedia.org/wiki/Tampa,_Florida",
  },
  sameAs: ["https://instagram.com/bodywrxpt"],
  medicalSpecialty: [
    "Orthopedic",
    "Sports Medicine",
    "Physical Therapy",
  ],
  knowsAbout: [
    "TMJ dysfunction",
    "Low back pain",
    "Knee pain",
    "Shoulder pain",
    "Plantar fasciitis",
    "Neck pain",
    "Hip pain",
    "Elbow pain",
    "Wrist pain",
    "Post-surgical rehabilitation",
    "Sports injury recovery",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-nav">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

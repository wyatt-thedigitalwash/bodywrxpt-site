import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ManifestoSection from "@/components/home/ManifestoSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import GallerySection from "@/components/home/GallerySection";
// import TestimonialSection from "@/components/home/TestimonialSection"; // Hidden until real testimonials provided
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://bodywrxpt.com",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroSection />
      <ManifestoSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      {/* TestimonialSection hidden until real testimonials provided */}
      <ContactSection />
    </>
  );
}

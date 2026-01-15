"use client";
import AboutSectionNew from "@/components/AboutSectionNew";
import FooterSection from "@/components/Footer";
import ServicesList from "@/components/ServicesList";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import TestimonialSection from "@/components/TestimonialSection";
import TrustedPartners from "@/components/TrustedPartners";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "dark" ? "bg-[#000]" : "bg-[#fff]"}`}>
      <HeroSection />
      <AboutSectionNew />
      <ServicesList />
      <ProductSection />
      <TestimonialSection />
      <TrustedPartners />
      <FooterSection />
      <ScrollToTopButton />
    </div>
  );
}

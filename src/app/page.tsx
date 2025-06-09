"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  ExperiencesSection,
  ContactSection,
} from "@/components/home";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 py-8 sm:py-12 lg:py-16">
          <ProjectsSection />
          <ExperiencesSection />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

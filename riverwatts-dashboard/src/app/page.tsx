'use client';

import HeroSection from "@/app/components/home/HeroSection";
import FeaturesSection from "@/app/components/home/FeaturesSection";
import TestimonialsSection from "@/app/components/home/TestimonialsSection";
import StatsSection from "@/app/components/home/StatsSection";
import FAQSection from "@/app/components/home/FAQSection";
import CTASection from "@/app/components/home/CTASection";
import EnergyVisualizationSection from "@/app/components/home/EnergyVisualizationSection";
import TechnologyShowcaseSection from "@/app/components/home/TechnologyShowcaseSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 text-slate-800 overflow-x-hidden">
      {/* Hero Section */}
      <div className="animate-slide-up pt-8">
        <HeroSection />
      </div>
      
      {/* Energy Visualization - Enhanced */}
      <div className="animate-slide-up">
        <EnergyVisualizationSection />
      </div>
      
      {/* Stats Section - Redesigned */}
      <div className="animate-slide-up">
        <StatsSection />
      </div>
      
      {/* Features Section */}
      <div className="animate-slide-up">
        <FeaturesSection />
      </div>
      
      {/* Technology Showcase */}
      <div className="animate-slide-up">
        <TechnologyShowcaseSection />
      </div>
      
      {/* Testimonials */}
      <div className="animate-slide-up">
        <TestimonialsSection />
      </div>
      
      {/* FAQ Section */}
      <div className="animate-slide-up">
        <FAQSection />
      </div>
      
      {/* CTA Section */}
      <div className="animate-slide-up mb-16">
        <CTASection />
      </div>
    </main>
  );
}
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Compare from '@/components/Compare';
import Testimonials from '@/components/Testimonials';
import ROICalculator from '@/components/ROICalculator';
import CTA from '@/components/CTA';
import Navbar from '@/components/Navbar';
import MainCard from '@/components/MainCard';
import BrandLogos from '@/components/BrandLogos';
import CaseStudyCards from '@/components/CaseStudyCards';
import ConvaiWidget from '@/components/ConvaiWidget';

export default function Home() {
  return (
    <div className="min-h-screen bg-white absolute inset-0">
      <div className="min-h-screen bg-white fixed inset-0 -z-10" />
      <Navbar />
      
      <MainCard>
        {/* Hero Section */}
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
          </div>
        </div>

        {/* Brand Logos Section */}
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BrandLogos />
          </div>
        </div>

        {/* Features Section */}
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Features />
          </div>
        </div>

        {/* How It Works Section */}
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HowItWorks />
          </div>
        </div>

        {/* Compare Section */}
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Compare />
          </div>
        </div>

        {/* ROI Calculator Section */}
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ROICalculator />
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CaseStudyCards />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="relative bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Testimonials />
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CTA />
          </div>
        </div>
      </MainCard>
      
      {/* ElevenLabs Convai Widget */}
      <ConvaiWidget />
    </div>
  );
}

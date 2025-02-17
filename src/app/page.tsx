import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Compare from '@/components/Compare';
import Testimonials from '@/components/Testimonials';
import ROICalculator from '@/components/ROICalculator';
import CTA from '@/components/CTA';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Compare />
      <ROICalculator />
      <Testimonials />
      <CTA />
    </main>
  );
}

import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import SuccessStories from '@/components/SuccessStories';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <HowItWorks />
      <Features />
      <SuccessStories />
      <CallToAction />
      <Footer />
    </main>
  );
}

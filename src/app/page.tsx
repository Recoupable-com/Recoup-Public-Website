import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-inter">
      <Navbar />
      <Hero />
      <Partners />
      <div className="flex-grow" />
      <Footer />
    </main>
  );
}

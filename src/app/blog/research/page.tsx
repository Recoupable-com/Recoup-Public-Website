import { Suspense } from 'react';
import ResearchContent from './ResearchContent';
import Navbar from '@/components/Navbar';
import LoadingAnimation from '@/components/LoadingAnimation';

export default function Research() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <Suspense fallback={
            <div className="flex justify-center items-center min-h-[400px]">
              <LoadingAnimation />
            </div>
          }>
            <ResearchContent />
          </Suspense>
        </div>
      </main>
    </>
  );
} 
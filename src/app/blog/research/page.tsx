'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import LoadingAnimation from '@/components/LoadingAnimation';

export default function Research() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchResearch = async () => {
      setLoading(true);
      try {
        const topic = searchParams.get('topic') || 'industry_news';
        const genre = searchParams.get('genre');
        
        const response = await fetch('/api/research', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            topic,
            genre: genre || '',
            customQuery: ''
          }),
        });

        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setContent(data.content);
      } catch (error) {
        console.error('Error fetching research:', error);
        setContent('Failed to load research content. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchResearch();
  }, [searchParams]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-32">
        <div className="max-w-4xl mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <LoadingAnimation />
            </div>
          ) : (
            <div className="prose prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          )}
        </div>
      </main>
    </>
  );
} 
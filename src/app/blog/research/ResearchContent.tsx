'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ResearchContent() {
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

  if (loading) {
    return null; // Let the Suspense fallback handle loading state
  }

  return (
    <div className="prose prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
} 
'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { BlogPost } from '@/types/blog';
import { fetchAllArticles } from '@/utils/seobotApi';
import ArticleCard from '@/components/ArticleCard';

function LoadingState() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={`loading-article-${i}`} className="animate-pulse">
          <div className="aspect-[16/9] bg-neutral-100 rounded-2xl mb-4" />
          <div className="h-4 bg-neutral-100 rounded w-1/4 mb-2" />
          <div className="h-8 bg-neutral-100 rounded w-3/4 mb-3" />
          <div className="h-4 bg-neutral-100 rounded w-full" />
        </div>
      ))}
    </div>
  );
}

function ErrorState({ error }: { error: string }) {
  return (
    <div className="text-center py-12">
      <div className="bg-red-50 rounded-xl p-6 max-w-xl mx-auto">
        <h3 className="text-red-800 font-semibold mb-2">Unable to load articles</h3>
        <p className="text-red-600">{error}</p>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="bg-neutral-50 rounded-xl p-8 max-w-xl mx-auto">
        <h3 className="text-xl font-semibold mb-2">No articles yet</h3>
        <p className="text-neutral-600">Check back soon for new content.</p>
      </div>
    </div>
  );
}

function ArticlesGrid({ articles }: { articles: BlogPost[] }) {
  const articleElements = articles.map((article) => (
    <ArticleCard key={article.id} article={article} />
  ));

  return (
    <div key="articles-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articleElements}
    </div>
  );
}

export default function Blog() {
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchAllArticles();
        console.log('Fetched articles:', data);
        setArticles(data);
      } catch (error) {
        console.error('Error loading articles:', error);
        setError(error instanceof Error ? error.message : 'Failed to load articles');
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  const renderContent = () => {
    if (loading) return <LoadingState />;
    if (error) return <ErrorState error={error} />;
    if (articles.length === 0) return <EmptyState />;
    return <ArticlesGrid articles={articles} />;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="text-center py-24">
              <h1 className="text-[72px] sm:text-[84px] lg:text-[120px] leading-[0.95] tracking-[-0.04em] mb-6 font-extrabold font-plus-jakarta">
                Research & Insights
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-plus-jakarta">
                In-depth articles and analysis on music marketing trends, strategies, and industry insights
              </p>
            </div>

            {renderContent()}
          </motion.div>
        </div>
      </main>
    </div>
  );
} 
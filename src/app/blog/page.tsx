import Navbar from '@/components/Navbar';
import { BlogPost } from '@/types/blog';
import { fetchAllArticles } from '@/utils/seobotApi';
import { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';

export const metadata: Metadata = {
  title: 'Research & Insights | Recoupable',
  description: 'In-depth articles and analysis on music marketing trends, strategies, and industry insights',
  openGraph: {
    title: 'Research & Insights | Recoupable',
    description: 'In-depth articles and analysis on music marketing trends, strategies, and industry insights',
  },
};

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <ArticleCard 
          key={article.id} 
          article={article} 
          isPriority={index < 3}
        />
      ))}
    </div>
  );
}

export default async function Blog() {
  let articles: BlogPost[] = [];
  let error: string | null = null;

  try {
    articles = await fetchAllArticles();
  } catch (e) {
    console.error('Error loading articles:', e);
    error = e instanceof Error ? e.message : 'Failed to load articles';
  }

  const renderContent = () => {
    if (error) return <ErrorState error={error} />;
    if (articles.length === 0) return <EmptyState />;
    return <ArticlesGrid articles={articles} />;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
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
          </div>
        </div>
      </main>
    </div>
  );
} 
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import type { BlogPost } from '@/types/blog';
import { fetchArticleById } from '@/utils/seobotApi';
import Image from 'next/image';
import { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const article = await fetchArticleById(params.slug);
    return {
      title: article.title,
      description: article.excerpt,
      openGraph: {
        title: article.title,
        description: article.excerpt,
        images: article.coverImage ? [article.coverImage] : [],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }
}

export default async function BlogPostPage({ params }: Props) {
  let article: BlogPost | null = null;
  let error: string | null = null;

  try {
    console.log('Loading article with slug:', params.slug);
    article = await fetchArticleById(params.slug);
    console.log('Fetched article:', article);
  } catch (e) {
    console.error('Error loading article:', e);
    error = e instanceof Error ? e.message : 'Failed to load article. Please try again later.';
  }

  if (error || !article) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-24">
          <div className="max-w-[800px] mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4 text-red-600">
                {error || 'Article not found'}
              </h1>
              <div className="text-neutral-600 mb-8">
                <p className="mb-4">We could not load this article. This might be because:</p>
                <ul className="list-disc list-inside text-left max-w-md mx-auto">
                  <li>The article has been moved or deleted</li>
                  <li>There was a problem connecting to our servers</li>
                  <li>The article is not yet published</li>
                </ul>
              </div>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-blue-600 hover:underline"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all articles
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <article className="max-w-[800px] mx-auto px-4">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-neutral-600 mb-4">
              <span className="bg-neutral-100 px-2 py-1 rounded-md">
                {article.category}
              </span>
              <span>·</span>
              <time dateTime={article.publishDate}>
                {new Date(article.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-plus-jakarta">
              {article.title}
            </h1>
            <p className="text-xl text-neutral-600 font-plus-jakarta">
              {article.excerpt}
            </p>
          </header>

          {/* Cover Image */}
          {article.coverImage && (
            <div className="relative aspect-[16/9] mb-12 rounded-2xl overflow-hidden">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 800px) 100vw, 800px"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none font-plus-jakarta"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Article Footer */}
          <footer className="mt-12 pt-6 border-t border-neutral-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Link
                href="/blog"
                className="text-neutral-600 hover:text-black transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all articles
              </Link>

              {article.seo.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {article.seo.keywords.map((keyword, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-md"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </footer>
        </article>
      </main>
    </>
  );
} 
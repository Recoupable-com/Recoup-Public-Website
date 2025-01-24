import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { articles } from '../articles';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articles[resolvedParams.slug];
  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.'
    };
  }
  return {
    title: article.title,
    description: article.description
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const article = articles[resolvedParams.slug];

  if (!article) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <article>
          <header className="mb-8">
            <div className="text-sm text-gray-500 mb-2">{article.category}</div>
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readingTime}</span>
              <span>•</span>
              <span>{article.author}</span>
            </div>
          </header>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
      </div>
    </>
  );
}
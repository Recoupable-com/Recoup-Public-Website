'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';

interface ArticleCardProps {
  article: BlogPost;
  isPriority?: boolean;
}

export default function ArticleCard({ article, isPriority = false }: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-black transition-all duration-200"
    >
      <Link href={`/blog/${article.slug}`} prefetch={isPriority}>
        {/* Image */}
        {article.coverImage ? (
          <div className="aspect-[16/9] relative overflow-hidden">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={isPriority}
              loading={isPriority ? "eager" : "lazy"}
              fetchPriority={isPriority ? "high" : "auto"}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
            />
          </div>
        ) : (
          <div className="aspect-[16/9] bg-neutral-100" />
        )}

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-neutral-600 mb-3">
            <span className="bg-neutral-100 px-2 py-1 rounded-md">
              {article.category}
            </span>
            <span>·</span>
            <time dateTime={article.publishDate}>
              {new Date(article.publishDate).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
          </div>
          
          <h2 className="text-xl font-semibold mb-3 group-hover:text-neutral-700 transition-colors font-plus-jakarta">
            {article.title}
          </h2>
          
          <p className="text-neutral-600 text-sm line-clamp-2">
            {article.excerpt}
          </p>

          <div className="mt-4 flex items-center text-sm text-black font-medium">
            Read article
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
} 
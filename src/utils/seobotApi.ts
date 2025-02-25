import { BlogPost } from '@/types/blog';
import { BlogClient } from 'seobot';

// Initialize SEObot client
if (!process.env.NEXT_PUBLIC_SEOBOT_API_KEY) {
  throw new Error('NEXT_PUBLIC_SEOBOT_API_KEY is not defined in environment variables');
}

const client = new BlogClient(process.env.NEXT_PUBLIC_SEOBOT_API_KEY);
console.log('SEObot client initialized with API key');

// Define types based on SEObot's Blog namespace
interface Category {
  title: string;
  slug: string;
}

interface ArticleIndex {
  id: string;
  slug: string;
  headline: string;
  metaDescription: string;
  category: Category | null;
  createdAt: string;
  image?: string;
}

interface Article extends ArticleIndex {
  metaKeywords: string;
  readingTime: number;
  html: string;
  markdown: string;
  outline: string;
  deleted: boolean;
  published: boolean;
  updatedAt: string;
}

function transformArticleIndex(data: ArticleIndex): BlogPost {
  return {
    id: data.id,
    title: data.headline,
    content: '', // Full content not available in index
    slug: data.slug,
    excerpt: data.metaDescription,
    publishDate: data.createdAt,
    category: data.category?.title || 'General',
    coverImage: data.image || '',
    seo: {
      title: data.headline,
      description: data.metaDescription,
      keywords: [] // Keywords not available in index
    }
  };
}

function transformArticle(data: Article): BlogPost {
  return {
    id: data.id,
    title: data.headline,
    content: data.html,
    slug: data.slug,
    excerpt: data.metaDescription,
    publishDate: data.createdAt,
    category: data.category?.title || 'General',
    coverImage: data.image || '',
    seo: {
      title: data.headline,
      description: data.metaDescription,
      keywords: data.metaKeywords.split(',').map((keyword: string) => keyword.trim())
    }
  };
}

export async function fetchArticleById(articleId: string): Promise<BlogPost> {
  try {
    console.log('Fetching article from SEObot API:', articleId);
    const article = await client.getArticle(articleId);
    
    if (!article) {
      throw new Error('Article not found in SEObot API');
    }
    
    console.log('SEObot API response:', article);
    return transformArticle(article as Article);
  } catch (error) {
    console.error('Error in fetchArticleById:', error);
    throw error;
  }
}

export async function fetchAllArticles(): Promise<BlogPost[]> {
  try {
    console.log('Fetching articles from SEObot API...');
    const response = await client.getArticles(0, 10);
    console.log('SEObot API response:', response);
    
    if (!response?.articles || !Array.isArray(response.articles)) {
      throw new Error('Invalid response from SEObot API');
    }
    
    const articles = response.articles.map(article => transformArticleIndex(article as ArticleIndex));
    console.log('Transformed articles:', articles.length);
    return articles;
  } catch (error) {
    console.error('Error in fetchAllArticles:', error);
    throw error;
  }
} 
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  slug: string;
  excerpt: string;
  publishDate: string;
  category: string;
  coverImage?: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
} 

export interface BlogPostResponse {
  success: boolean;
  message: string;
  slug: string;
} 
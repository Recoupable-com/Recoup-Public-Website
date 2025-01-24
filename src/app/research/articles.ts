// Define the article interface
interface Article {
  title: string;
  category: string;
  date: string;
  author: string;
  readingTime: string;
  description: string;
  image?: string;
  keywords: string[];
  relatedPosts?: string[];
  content: string;
}

interface Articles {
  [key: string]: Article;
}

// Articles data
export const articles: Articles = {
  'ai-music-marketing': {
    title: 'The Rise of AI in Music Marketing: A Complete Guide for Independent Artists',
    category: 'Industry Trends',
    date: 'January 17, 2024',
    author: 'Recoup Team',
    readingTime: '8 min read',
    description: 'Learn how artificial intelligence is revolutionizing music marketing and discover practical AI tools that independent artists can use to compete with major labels.',
    keywords: [
      'AI music marketing',
      'artificial intelligence music industry',
      'music marketing automation',
      'AI for independent artists',
      'music promotion tools',
      'digital music marketing',
      'music industry technology',
      'AI marketing strategy',
      'music marketing tools',
      'independent artist marketing'
    ],
    relatedPosts: [
      'social-media-strategy-2024',
      'building-fan-base'
    ],
    content: `
      <article class="article-content prose prose-lg prose-gray mx-auto">
        <!-- Content remains the same -->
      </article>
    `
  },
  'social-media-strategy-2024': {
    title: 'Social Media Strategy for Musicians in 2024',
    category: 'Marketing',
    date: 'January 15, 2024',
    author: 'Recoup Team',
    readingTime: '10 min read',
    description: 'A comprehensive guide to building your music brand on social media platforms. Learn the latest strategies for TikTok, Instagram, and emerging platforms.',
    keywords: [
      'social media marketing',
      'music promotion',
      'TikTok marketing',
      'Instagram for musicians',
      'social media strategy'
    ],
    content: `
      <article class="article-content prose prose-lg prose-gray mx-auto">
        <!-- Content remains the same -->
      </article>
    `
  }
}; 
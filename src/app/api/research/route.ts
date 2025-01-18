import { NextResponse } from 'next/server';

if (!process.env.TAVILY_API_KEY) {
  throw new Error('TAVILY_API_KEY is not defined in environment variables');
}

export async function POST(req: Request) {
  try {
    if (!req.body) {
      return NextResponse.json(
        { error: 'Request body is empty' },
        { status: 400 }
      );
    }

    const { topic, genre, customQuery } = await req.json();
    console.log('Received request:', { topic, genre, customQuery });

    // Construct a search query based on the topic and genre
    let searchQuery = '';
    // If there's a custom query about Billboard charts, prioritize it
    if (customQuery && customQuery.toLowerCase().includes('billboard')) {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.toLocaleString('en-US', { month: 'long' });
      const day = today.getDate();
      searchQuery = `Who is #1 on the Billboard Hot 100 chart for week of ${month} ${day}, ${year}? Include both song name and artists`;
    } else {
      switch (topic) {
        case 'market_trends':
          searchQuery = `latest music industry trends ${genre ? `for ${genre} music` : ''} ${customQuery || ''}`.trim();
          break;
        case 'promotion_strategies':
          searchQuery = `music promotion strategies ${genre ? `for ${genre} artists` : ''} ${customQuery || ''}`.trim();
          break;
        case 'fan_engagement':
          searchQuery = `fan engagement tactics ${genre ? `for ${genre} musicians` : ''} ${customQuery || ''}`.trim();
          break;
        case 'revenue_streams':
          searchQuery = `music revenue opportunities ${genre ? `for ${genre} artists` : ''} ${customQuery || ''}`.trim();
          break;
        case 'industry_news':
          searchQuery = `latest music industry news ${genre ? `in ${genre}` : ''} ${customQuery || ''}`.trim();
          break;
        default:
          searchQuery = (customQuery || 'music industry trends').trim();
      }
    }

    console.log('Constructed search query:', searchQuery);

    try {
      const { tavily } = await import('@tavily/core');
      const client = tavily({
        apiKey: process.env.TAVILY_API_KEY || ''
      });

      // Search parameters matching the documentation
      const searchParams = {
        searchDepth: customQuery?.toLowerCase().includes('billboard') ? 'advanced' : 'basic' as 'basic' | 'advanced',
        maxResults: 2,  // Reduce number of results
        includeAnswer: customQuery?.toLowerCase().includes('billboard'),
        includeDomains: customQuery?.toLowerCase().includes('billboard') 
          ? ['billboard.com']  // Only search Billboard.com for chart questions
          : [
              'billboard.com',
              'variety.com',
              'rollingstone.com',
              'musicbusinessworldwide.com',
              'musically.com',
              'hypebot.com',
              'digitalmusicnews.com'
            ],
        sortBy: 'date',  // Prioritize recent content
        searchFilter: 'article'  // Only return article content
      };

      console.log('Search params:', searchParams);
      const results = await client.search(searchQuery, searchParams);

      console.log('Search completed successfully');
      // Format the results to match the frontend's expected structure and filter out metadata
      const formattedResults = results.results
        .filter(result => !result.content.includes('Songwriter(s):') && !result.content.includes('Producer(s):'))
        .map(result => ({
          title: result.title.split('|')[0].trim(),  // Remove site name from titles
          url: result.url,
          content: result.content.split('\n')[0],  // Only take the first paragraph
          score: result.score,
          published_date: result.publishedDate
        }));

      return NextResponse.json({ 
        results: formattedResults,
        answer: results.answer  // Include the direct answer if available
      });
    } catch (searchError: unknown) {
      console.error('Tavily API error:', searchError);
      if (searchError instanceof Error) {
        console.error('Error details:', searchError.message);
      }
      return NextResponse.json(
        { error: 'Failed to perform search', details: searchError instanceof Error ? searchError.message : 'Unknown error occurred' },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error('Request processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process request', details: error instanceof Error ? error.message : 'Unknown error occurred' },
      { status: 500 }
    );
  }
} 
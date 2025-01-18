import { tavily } from '@tavily/core';

async function testTavily() {
  const client = new tavily({
    apiKey: process.env.TAVILY_API_KEY || ''
  });

  try {
    const results = await client.search({
      query: 'latest music industry trends',
      search_depth: 'advanced'
    });
    console.log('Search results:', results);
  } catch (error) {
    console.error('Error:', error);
  }
}

export default testTavily; 
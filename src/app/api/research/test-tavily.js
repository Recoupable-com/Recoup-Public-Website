// Simple test script for Tavily API
const { tavily } = require('@tavily/core');

async function testTavilyAPI() {
  const client = new tavily({
    apiKey: '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'
  });

  try {
    const results = await client.search({
      query: 'latest music industry trends',
      search_depth: 'basic',
      max_results: 5,
      include_answer: false,
      include_domains: [
        'billboard.com',
        'variety.com',
        'rollingstone.com'
      ]
    });
    console.log('Search successful!');
    console.log('Results:', JSON.stringify(results, null, 2));
  } catch (error) {
    console.error('Error details:', error.response?.data);
    console.error('Error:', error.message);
  }
}

testTavilyAPI(); 
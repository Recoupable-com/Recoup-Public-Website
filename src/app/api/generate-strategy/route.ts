import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Create OpenAI client with additional configuration
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://api.openai.com/v1', // Explicitly set the base URL
  defaultHeaders: {
    'Content-Type': 'application/json',
  },
  defaultQuery: undefined,
  organization: undefined, // Add your org ID here if you have one
});

export async function POST(request: Request) {
  try {
    // Debug log to check if API key is loaded (we'll only log the first few characters)
    const apiKeyPreview = process.env.OPENAI_API_KEY?.substring(0, 7) + '...';
    console.log('Using API key:', apiKeyPreview);

    const body = await request.json();
    const { name, genre, style, targetAudience, goals, platforms, upcomingReleases, uniqueStory } = body;

    // Create a prompt for OpenAI
    const prompt = `As an expert music marketing strategist, create a detailed content strategy for an artist with the following details:

Artist/Band: ${name}
Genre: ${genre}
Style/Subgenre: ${style}
Target Audience: ${targetAudience}
Goals: ${goals}
${upcomingReleases ? `Upcoming Releases: ${upcomingReleases}` : ''}
${uniqueStory ? `Artist Story: ${uniqueStory}` : ''}

For each of these platforms: ${platforms.join(', ')}, provide:
1. A list of 5 specific content ideas tailored to the platform
2. A recommended posting schedule
3. 3 engagement tips to maximize reach and interaction

Format the response as a JSON object with this structure:
{
  "platforms": [
    {
      "platform": "platform_name",
      "contentIdeas": ["idea1", "idea2", "idea3", "idea4", "idea5"],
      "postingSchedule": "schedule_description",
      "engagementTips": ["tip1", "tip2", "tip3"]
    }
  ]
}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an expert music marketing strategist who specializes in creating engaging social media content strategies for musicians. Your responses should be practical, specific, and tailored to each platform's unique characteristics."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" }
    });

    // Parse the response
    const content = completion.choices[0].message.content;
    if (!content) {
      throw new Error('No content in response');
    }
    const response = JSON.parse(content);

    if (!response.platforms || !Array.isArray(response.platforms)) {
      throw new Error('Invalid response format from OpenAI');
    }

    return NextResponse.json({ contentPlan: response.platforms });
  } catch (error) {
    console.error('Error in generate-strategy:', error);
    let errorMessage = 'Failed to generate content strategy';
    
    if (error instanceof Error) {
      // Log the full error for debugging
      console.error('Full error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack,
        error
      });
      
      errorMessage = error.message;
      // Check if it's an OpenAI API error
      if ('status' in error) {
        if (error.status === 401) {
          errorMessage = 'Authentication error with OpenAI API. Please check your API key configuration.';
        } else if (error.status === 429) {
          errorMessage = 'Rate limit exceeded. Please try again later.';
        } else if (error.status === 500) {
          errorMessage = 'OpenAI service error. Please try again later.';
        }
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 
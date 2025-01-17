import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://api.openai.com/v1',
  defaultHeaders: {
    'Content-Type': 'application/json',
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      artistName,
      releaseType, // single, album, EP, tour, etc.
      releaseTitle,
      releaseDate,
      genre,
      description,
      quotes,
      achievements,
      links
    } = body;

    const prompt = `As a professional music publicist, write a compelling press release with the following details:

Artist Name: ${artistName}
Release Type: ${releaseType}
Title: ${releaseTitle}
Release Date: ${releaseDate}
Genre: ${genre}
Description: ${description}
${quotes ? `Quotes: ${quotes}` : ''}
${achievements ? `Notable Achievements: ${achievements}` : ''}
${links ? `Important Links: ${links}` : ''}

Format the response as a JSON object with this structure:
{
  "headline": "The attention-grabbing headline",
  "subheading": "A supporting subheading",
  "dateline": "CITY, State, Date --",
  "introduction": "The opening paragraph that hooks the reader",
  "body": ["Array of body paragraphs"],
  "boilerplate": "The 'About Artist' closing paragraph",
  "contactInfo": "Press contact information"
}

Make it engaging and professional, following music industry press release standards.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an experienced music industry publicist who specializes in writing compelling press releases. Your writing is professional, engaging, and follows AP style guidelines. You know how to craft headlines that grab attention and body copy that tells a compelling story."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" }
    });

    const content = completion.choices[0].message.content;
    if (!content) {
      throw new Error('No content in response');
    }

    const response = JSON.parse(content);
    return NextResponse.json(response);

  } catch (error) {
    console.error('Error in generate-press:', error);
    let errorMessage = 'Failed to generate press release';
    
    if (error instanceof Error) {
      console.error('Full error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack,
        error
      });
      
      errorMessage = error.message;
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
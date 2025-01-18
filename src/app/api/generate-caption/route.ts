import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {
    const { platform, contentType, artistName, contentDetails } = await req.json();

    const prompt = `Generate an engaging social media caption for ${platform}. 
Details:
- Artist/Band: ${artistName}
- Content Type: ${contentType}
- Content Details: ${contentDetails}

Consider these platform-specific best practices:
${platform === 'instagram' ? '- Use emojis strategically\n- Include relevant hashtags\n- Keep it visually descriptive' : ''}
${platform === 'tiktok' ? '- Use trending phrases\n- Keep it short and punchy\n- Include relevant hashtags' : ''}
${platform === 'twitter' ? '- Be concise\n- Use relevant hashtags sparingly\n- Include a clear call-to-action' : ''}
${platform === 'facebook' ? '- Write in a more detailed style\n- Focus on storytelling\n- Include a clear call-to-action' : ''}

The caption should be engaging, authentic, and optimized for ${platform}'s audience. Include appropriate emojis and hashtags where relevant.`;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are an expert social media manager for musicians and artists. You create engaging, platform-optimized captions that drive engagement and growth."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: "gpt-4-turbo-preview",
      temperature: 0.7,
    });

    const caption = completion.choices[0].message.content;

    return NextResponse.json({ caption });
  } catch (error) {
    console.error('Error generating caption:', error);
    return NextResponse.json(
      { error: 'Failed to generate caption' },
      { status: 500 }
    );
  }
} 
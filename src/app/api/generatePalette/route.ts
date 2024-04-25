import fs from 'fs';
import { Asset } from 'next/dist/compiled/@next/font/dist/google';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI, { ClientOptions } from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import path from 'path';

export const runtime = 'edge';

const getOpenApiResponse = async (userMessage: string) => {
  try {
    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (!openaiApiKey) {
      throw new Error('OPENAI_API_KEY environment variable is not set.');
    }

    const prestringFilePath = path.join(process.cwd(), 'prestring.txt');
    const prestringContent = fs.readFileSync(prestringFilePath, 'utf-8');

    const openai = new OpenAI(openaiApiKey as ClientOptions);

    const ApiMessage: ChatCompletionMessageParam[] = [
      { role: 'system', content: prestringContent },
      { role: 'user', content: JSON.stringify(userMessage) },
    ];

    const completion = await openai.chat.completions.create({
      messages: ApiMessage,
      model: 'gpt-3.5-turbo-0125',
      response_format: { type: 'json_object' },
    });

    const content = JSON.parse(completion.choices[0].message.content as string);

    return content;
  } catch (error) {
    console.error('OpenAI Error:', error);
    return {
      error: 'OpenAI Error:' + error,
    };
  }
};

export async function POST(req) {
  try {
    const colorPalette = await getOpenApiResponse(await req.text());

    return NextResponse.json(colorPalette, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}

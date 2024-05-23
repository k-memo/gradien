import { NextResponse } from 'next/server';
import OpenAI, { ClientOptions } from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { prestring } from '../../../../models/prestring.const';
import { IPalette } from '../../../../models/colorpalette.interface';
import error from 'next/error';

export const runtime = 'edge';

const getOpenApiResponse = async (userMessage: string) => {
  try {
    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (!openaiApiKey) {
      throw new Error('OPENAI_API_KEY environment variable is not set.');
    }

    const openai = new OpenAI(openaiApiKey as ClientOptions);

    const ApiMessage: ChatCompletionMessageParam[] = [
      { role: 'system', content: prestring },
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
    let generateUntil = true;
    let correctPalette: IPalette | null = null;

    for (let index = 0; index < 4; index++) {
      const colorPalette: IPalette = await getOpenApiResponse(req.text());

      if (colorPalette.colors?.length > 0) {
        correctPalette = { ...colorPalette };
        break;
      }
    }

    if (correctPalette == null) {
      throw 'Something went wrong...';
    }

    return NextResponse.json(correctPalette, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}

import { NextResponse } from 'next/server';
import OpenAI, { ClientOptions } from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { IPalette } from '../../../../models/colorpalette.interface';
import { prestring } from './prestring.const';
import { z } from 'zod';

export const runtime = 'edge';

const hexCodePattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;

const hexCodeSchema = z.string().refine(str => hexCodePattern.test(str), {
  message: 'Invalid hex color code',
});

const paletteSchema = z.object({
  colors: z.array(
    z.object({
      hex: hexCodeSchema,
    }),
  ),
});

// old validation
const isHexCode = (str: string): boolean => {
  const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
  return hexPattern.test(str);
};

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
    let correctPalette: IPalette | null = null;

    for (let index = 0; index < 4; index++) {
      const userMessage = await req.text();
      const colorPalette: IPalette = await getOpenApiResponse(userMessage);

      const result = paletteSchema.safeParse(colorPalette);

      if (result.success) {
        correctPalette = { ...colorPalette };
        break;
      } else {
        console.error('Validation Error:', result.error.errors);
      }
    }

    if (correctPalette == null) {
      throw Error('Something went wrong...');
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

import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI, { ClientOptions } from 'openai';
import fs from 'fs';
import path from 'path';
export default async function createMessage(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { messages } = req.body;

    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (!openaiApiKey) {
      throw new Error('OPENAI_API_KEY environment variable is not set.');
    }

    const openai = new OpenAI(openaiApiKey as ClientOptions);

    const prestringFilePath = path.join(process.cwd(), 'prestring.txt');
    const prestringContent = fs.readFileSync(prestringFilePath, 'utf-8');

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: prestringContent },
        { role: "user", content: "    Skin Color: #FFDAB9 Eye Color: #4682B4 Hair Color: #A52A2A" }
      ],
      model: "gpt-3.5-turbo-0125",
      response_format: { type: "json_object" }
    });

    const content = JSON.parse(completion.choices[0].message.content as string);

    console.log(content);
    res.status(200).json({ content });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

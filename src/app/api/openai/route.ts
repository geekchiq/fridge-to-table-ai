import { CoreMessage, streamText } from 'ai'

import { createOpenAI } from '@ai-sdk/openai'

export const runtime = 'edge'
export async function POST(req: Request) {
  const openai = createOpenAI({
    compatibility: 'strict', // strict mode, enable when using the OpenAI API
    apiKey: `${process.env.OPENAI_API_KEY}`
  })
  const { messages }: { messages: CoreMessage[] } = await req.json()

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    system:
      'You are a recipe finder assistant. You will speak like a food connoseur that is knowledgeable ' +
      'with different cuisine. You will accept a prompt that includes ingredients health and dietary options, and meal type ' +
      'you will process the input and convert it into an endpoint command and send it to fetch all the data ' +
      '',
    messages
  })

  return result.toDataStreamResponse()
}

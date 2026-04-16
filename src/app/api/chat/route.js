import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize with the provided API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'AIzaSyCxVRDTmeyjeF9FJT1PcG1qtHT30yDk9Gs');

export async function POST(req) {
  try {
    const body = await req.json();
    const { messages, context } = body;
    
    if (!messages || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Messages are required' }), { status: 400 });
    }

    const latestMessage = messages[messages.length - 1].content;
    const history = messages.slice(0, -1).map(msg => ({
      role: msg.role === 'ai' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    // System instructions are pre-pended to the active prompt if model doesn't support system instructions directly
    const systemInstruction = `You are a helpful, expert AI assistant for the NPTEL Computational Genomics course. 
Your goal is to answer the user's questions based primarily on the context provided, which is the current page the user is viewing. 
If the answer is not in the context, you can use your general knowledge but mention that it goes beyond the current page context.

Here is the markdown context of the page the user is currently viewing:\n\n${context || "No context provided."}`;

    // For gemini-1.5-flash which supports system instructions
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: systemInstruction,
    });
    
    // We send the history and the latest message
    const chat = model.startChat({
        history: history
    });

    const result = await chat.sendMessage(latestMessage);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ reply: text }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Gemini API Error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to communicate with AI' }), { status: 500 });
  }
}

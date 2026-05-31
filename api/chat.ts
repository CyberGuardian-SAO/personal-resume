import { buildSystemPrompt } from './_prompt';

export default async function handler(req: any, res: any) {
  const SYSTEM_PROMPT = buildSystemPrompt();
  console.log('[Serverless Chat] Started handler. System Prompt generated.');
  // Set CORS headers for Vercel functions if called externally
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { prompt, lang, history } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const currentLang = lang || 'zh';
    const provider = process.env.AI_PROVIDER || 'gemini';

    console.log(`[Serverless Chat] Provider selected: ${provider}, Lang: ${currentLang}`);

    if (provider === 'openai') {
      const apiKey = process.env.OPENAI_API_KEY;
      const baseUrl = process.env.OPENAI_API_BASE || 'https://api.openai.com/v1';
      const model = process.env.OPENAI_MODEL || 'gpt-4o';

      if (!apiKey) {
        throw new Error('OPENAI_API_KEY is not configured on the environment');
      }

      // Convert conversation history to OpenAI Chat Completion formats
      const formattedMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...(history || []).map((h: any) => ({
          role: h.role === 'model' ? 'assistant' : 'user',
          content: h.parts?.[0]?.text || ''
        })),
        { role: 'user', content: prompt }
      ];

      const completionUrl = `${baseUrl.replace(/\/$/, '')}/chat/completions`;
      const response = await fetch(completionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: model,
          messages: formattedMessages,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenAI API Completion returned error ${response.status}: ${errorText}`);
      }

      const resData = await response.json();
      const reply = resData.choices?.[0]?.message?.content || '';
      return res.status(200).json({ reply });

    } else {
      // Default: Native Gemini API Call via REST endpoint to avoid bundling/import failures in Serverless
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('GEMINI_API_KEY is not configured on the environment');
      }

      // Prepare conversation messages combining previous interactions for context
      const contents = [
        ...(history || []).map((h: any) => ({
          role: h.role === 'model' ? 'model' : 'user',
          parts: [{ text: h.parts?.[0]?.text || '' }]
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ];

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: contents,
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }]
          },
          generationConfig: {
            temperature: 0.7
          }
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Gemini API returned error ${response.status}: ${errorText}`);
      }

      const resData = await response.json();
      const reply = resData.candidates?.[0]?.content?.parts?.[0]?.text || '';
      return res.status(200).json({ reply });
    }

  } catch (err: any) {
    console.error('Error in Serverless chat function:', err.message || err);
    return res.status(500).json({
      error: 'Failed to generate response',
      details: err.message || String(err)
    });
  }
}

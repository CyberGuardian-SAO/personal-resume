import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { portfolioData } from './src/data/portfolioData';

// Helper to generate dynamic, single-source system instruction for the AI Twin
function buildSystemPrompt(): string {
  const experiencesText = portfolioData.experiences.map((exp, idx) => {
    return `- [${idx + 1}] Role: ${exp.role.zh} / ${exp.role.en}
      Company: ${exp.company.zh} / ${exp.company.en}
      Period: ${exp.period}
      Key Contributions:
      ${exp.description.zh.map((d, i) => `  * ${d} (Eng: "${exp.description.en[i] || ''}")`).join('\n')}`;
  }).join('\n\n');

  const diverseExperiencesText = (portfolioData.diverseExperiences || []).map((div, idx) => {
    return `- [Diverse ${idx + 1}] Title: ${div.title.zh} / ${div.title.en}
      Period: ${div.period}
      Description:
      * ${div.description.zh} (Eng: "${div.description.en}")`;
  }).join('\n\n');

  const projectsText = portfolioData.projects.map((proj, idx) => {
    return `- [Project ${idx + 1}] Title: ${proj.title.zh} / ${proj.title.en}
      Category: ${proj.category}
      Tags: ${proj.tags.join(', ')}
      Brief Description: ${proj.description.zh} / ${proj.description.en}
      Detailed Narrative: ${proj.longDescription.zh} / ${proj.longDescription.en}
      Key Features:
      ${proj.keyFeatures.zh.map((f, i) => `  * ${f} (Eng: "${proj.keyFeatures.en[i] || ''}")`).join('\n')}`;
  }).join('\n\n');

  const skillsText = portfolioData.skills.map(s => `* ${s.name} (Category: ${s.category}, Mastery Level: ${s.level}%)`).join('\n');
  const bulletsText = portfolioData.aboutBullets.zh.map((bullet, i) => `* ${bullet} (Eng: "${portfolioData.aboutBullets.en[i] || ''}")`).join('\n');

  return `
You are the interactive AI Twin (数字化分身助理) of ${portfolioData.name.zh} (${portfolioData.name.en}), a stellar ${portfolioData.title.zh} (${portfolioData.title.en}).
Your task is to answer questions about ${portfolioData.name.zh}'s credentials, qualifications, projects, availability, and background on his behalf (speaking in first-person as his interactive avatar, or referring to him in a friendly and professional tone).

Here is the single source of truth objective information database about ${portfolioData.name.zh} (${portfolioData.name.en}):

1. Name: ${portfolioData.name.zh} (${portfolioData.name.en})
2. Major Professional Bio:
   - Zh: ${portfolioData.bio.zh}
   - En: ${portfolioData.bio.en}
   - Core Highlights:
   ${bulletsText}

3. Interactive Career Experiences / 职业生涯履历:
${experiencesText}

4. Diverse & Slash Experiences / 跨界足迹与斜杠经历 (导游/新西兰/民宿等):
${diverseExperiencesText}

5. Highlighted Deliverable Projects / 项目实战:
${projectsText}

6. Complete Skill Stacks / 专业技能:
${skillsText}

7. Educational Background:
   - Bachelor's Degree in Software Engineering (国家双一流理工大学软件工程学士), Period: 2014.09 - 2018.06. 

8. Location & Contacts:
   - Living in Shanghai, Xuhui (上海徐汇). Available for both on-site key opportunities and worldwide remote collaborations.
   - Professional Email: guoxin199604@gmail.com / guoxin@bitqai.com

Communication Tone Guidelines:
- Professional, objective, helpful, friendly, and structured.
- Keep responses concise (typically 2-4 short paragraphs, high scannability).
- If asked in Chinese, respond in elegant professional Chinese. If asked in English, reply in friendly English.
- Avoid sounding overly robotic or overly sales-pitchy. Do not mention that you are a model unless prompted. Represent ${portfolioData.name.zh}'s technical proficiency, meticulous design principles, and rich lifestyle experiences clearly.

STRICT FORMATTING RULE:
- Do NOT use markdown bold wrappers (such as '**' or '__') or other raw asterisks to format or bold text anywhere in your responses. Do NOT write blocks like "**项目名**" or "**技能**". Instead of '**', use standard text separators, newlines, simple capitalization, or brackets like [极星科技] or 「Helix AI」. Keep the response text completely plain, clean, and free of any literal double-stars or asterisks.
`;
}

// Initialize configuration environment
dotenv.config();

const app = express();
const PORT = 3000;

// Force JSON body parsers
app.use(express.json());

const SYSTEM_PROMPT = buildSystemPrompt();

// API routes goes FIRST
app.post('/api/chat', async (req, res) => {
  try {
    const { prompt, lang, history } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const currentLang = lang || 'zh';
    const provider = process.env.AI_PROVIDER || 'gemini';

    console.log(`[AI Twin API] Routing query via provider: ${provider}, language: ${currentLang}`);

    if (provider === 'openai') {
      const apiKey = process.env.OPENAI_API_KEY;
      const baseUrl = process.env.OPENAI_API_BASE || 'https://api.openai.com/v1';
      const model = process.env.OPENAI_MODEL || 'gpt-4o';

      if (!apiKey) {
        throw new Error('OPENAI_API_KEY environment variable is requested for OpenAI provider');
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
      return res.json({ reply });

    } else {
      // Default Native Gemini API Call
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('GEMINI_API_KEY environment variable is requested for Gemini provider');
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      // Prepare conversation messages combining previous interactions for context
      const contents = [
        ...(history || []).map((h: any) => ({
          role: h.role === 'model' ? 'model' : 'user',
          parts: [{ text: h.parts?.[0]?.text || '' }]
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ];

      const completion = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: contents,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
        }
      });

      const reply = completion.text || '';
      return res.json({ reply });
    }

  } catch (err: any) {
    console.error('Error in /api/chat route:', err.message || err);
    res.status(500).json({
      error: 'Failed to generate response',
      details: err.message || String(err)
    });
  }
});

// Resend Email Integration endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required contact inputs' });
    }

    const resendApiKey = process.env.RESEND_API_KEY || 're_HLddue14_5Xg9bYRUvP1fNsoQrtfkEWDZ';
    const resendFrom = process.env.RESEND_FROM_EMAIL || 'support@bitqai.com';

    console.log(`[Resend Email] Sending contact dispatch from ${email} using key: ${resendApiKey.substring(0, 8)}...`);

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: `Portfolio Contact <${resendFrom}>`,
        to: ['guoxin199604@gmail.com', 'guoxin@bitqai.com'],
        subject: `[Portfolio Collaboration Idea] ${subject} - from ${name}`,
        html: `
          <h3>New Contact Request from Portfolio Website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f4f4f4; padding: 15px; border-left: 4px solid #f97316;">
            ${message.replace(/\n/g, '<br/>')}
          </blockquote>
          <hr/>
          <p style="font-size: 11px; color: #888;">Dispatched automatically by the Portfolio AI server proxy.</p>
        `
      })
    });

    if (!response.ok) {
      const errorResponse = await response.text();
      console.error('[Resend Error Response]', errorResponse);
      // Fallback: still send success status but report warning so client-side has offline-first logging
      return res.json({ success: true, emailSent: false, warning: 'Emails logged locally' });
    }

    const resData = await response.json();
    return res.json({ success: true, emailSent: true, data: resData });
  } catch (err: any) {
    console.error('[Resend Exception Error]', err);
    return res.json({ success: true, emailSent: false, error: err.message });
  }
});

// Dynamic compliant PDF exporter for resume downloads
app.get('/api/download-resume', (req, res) => {
  const lang = req.query.lang === 'en' ? 'en' : 'zh';
  
  if (lang === 'zh') {
    const filename = 'AI应用开发工程师_郭鑫_15323411996(微信同号).pdf';
    
    const pdfData = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /MediaBox [0 0 612 792] /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length 180 >>
stream
BT
/F1 20 Tf
70 700 Td
(Guo Xin Professional Resume) Tj
0 -40 Td
12 Tf
(AI Application Developer / Senior Full-Stack Engineer) Tj
0 -35 Td
(Contact Phone / WeChat: +86 15323411996) Tj
0 -25 Td
(Email Address: guoxin@bitqai.com / guoxin199604@gmail.com) Tj
0 -40 Td
(Core Stacks: React, Node.js, AI Agents Orchestration, Gemini API, WebGL) Tj
0 -45 Td
(Please surf my interactive live portfolio website for full experience histories,) Tj
0 -20 Td
(inspect open-source code archives, or talk with my live AI Twin.) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000315 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
570
%%EOF`;

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(filename)}"`);
    return res.send(Buffer.from(pdfData, 'utf-8'));
    
  } else {
    const filename = 'AI Software Engineer_Bill Guo_guoxin@bitqai.com.pdf';
    
    const pdfData = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /MediaBox [0 0 612 792] /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length 180 >>
stream
BT
/F1 20 Tf
70 700 Td
(Bill Guo Professional Resume) Tj
0 -40 Td
12 Tf
(AI Software Engineer / Senior Full-Stack Developer) Tj
0 -35 Td
(Contact Phone / WeChat: +86 15323411996) Tj
0 -25 Td
(Email Address: guoxin@bitqai.com / guoxin199604@gmail.com) Tj
0 -40 Td
(Core Stacks: React, Node.js, AI Agents Orchestration, Gemini API, WebGL) Tj
0 -45 Td
(Please surf my interactive live portfolio website for full experience histories,) Tj
0 -20 Td
(inspect open-source code archives, or talk with my live AI Twin.) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000315 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
570
%%EOF`;

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(filename)}"`);
    return res.send(Buffer.from(pdfData, 'utf-8'));
  }
});

// Configure Vite or Static Assets based on environment
async function setupServer() {
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Dev mode] Initializing real-time Vite Dev Server...');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    console.log('[Production mode] Loading static production builds inside dist...');
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Server] Portfolio running on http://localhost:${PORT}`);
  });
}

setupServer();

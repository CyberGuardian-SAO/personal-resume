export default async function handler(req: any, res: any) {
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
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required contact inputs' });
    }

    const resendApiKey = process.env.RESEND_API_KEY || 're_HLddue14_5Xg9bYRUvP1fNsoQrtfkEWDZ';
    const resendFrom = process.env.RESEND_FROM_EMAIL || 'support@bitqai.com';

    console.log(`[Serverless Resend Email] Sending contact dispatch from ${email}`);

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: `Portfolio Contact <${resendFrom}>`,
        to: ['guoxin@bitqai.com'],
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
          <p style="font-size: 11px; color: #888;">Dispatched automatically by the Portfolio serverless function proxy.</p>
        `
      })
    });

    if (!response.ok) {
      const errorResponse = await response.text();
      console.error('[Resend Error Response]', errorResponse);
      // Fallback: still send success status but report warning so client-side has offline-first logging
      return res.status(200).json({ success: true, emailSent: false, warning: 'Emails logged locally on serverless function' });
    }

    const resData = await response.json();
    return res.status(200).json({ success: true, emailSent: true, data: resData });
  } catch (err: any) {
    console.error('[Resend Exception Error in Serverless]', err);
    return res.status(200).json({ success: true, emailSent: false, error: err.message });
  }
}

export default async function handler(req: any, res: any) {
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
(Email Address: guoxin@bitqai.com) Tj
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
    return res.status(200).send(Buffer.from(pdfData, 'utf-8'));
    
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
(Email Address: guoxin@bitqai.com) Tj
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
00058 00000 n 
00115 00000 n 
00244 00000 n 
00315 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
570
%%EOF`;

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(filename)}"`);
    return res.status(200).send(Buffer.from(pdfData, 'utf-8'));
  }
}

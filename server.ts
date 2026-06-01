import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import compression from 'compression';
import { createServer as createViteServer } from 'vite';
import chatHandler from './api/chat';
import contactHandler from './api/contact';
import downloadResumeHandler from './api/download-resume';

// Initialize configuration environment
dotenv.config();

const app = express();
const PORT = 3000;

// Enable gzip compression for better page load speed
app.use(compression());

// Force JSON body parsers
app.use(express.json());

// API routes goes FIRST (reusing Vercel serverless handlers directly)
app.post('/api/chat', chatHandler);
app.post('/api/contact', contactHandler);
app.get('/api/download-resume', downloadResumeHandler);

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


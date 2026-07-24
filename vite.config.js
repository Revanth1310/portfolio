import 'dotenv/config'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Mounts api/contact.js into Vite's own dev server, so `npm run dev` alone
// is enough to test the contact form locally — no Vercel CLI required.
// In production (on Vercel) this plugin does nothing; Vercel runs
// api/contact.js itself as a serverless function.
function localApiPlugin() {
  return {
    name: 'local-api-contact',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Allow', 'POST');
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => (body += chunk));
        req.on('end', async () => {
          try {
            req.body = body ? JSON.parse(body) : {};
            const { default: handler } = await server.ssrLoadModule('/api/contact.js');
            const jsonRes = {
              statusCode: 200,
              setHeader: () => {},
              status(code) {
                this.statusCode = code;
                return this;
              },
              json(payload) {
                res.statusCode = this.statusCode;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(payload));
              },
            };
            await handler(req, jsonRes);
          } catch (err) {
            console.error('Local /api/contact error:', err);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Local API handler failed' }));
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), localApiPlugin()],
})

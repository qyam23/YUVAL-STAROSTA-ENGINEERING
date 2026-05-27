import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: "/",
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          privacyPolicy: path.resolve(__dirname, 'privacy-policy.html'),
          news: path.resolve(__dirname, 'news.html'),
          newsIndex: path.resolve(__dirname, 'news/index.html'),
          newsLine277: path.resolve(__dirname, 'news/glass-bottle-line-277/index.html'),
          newsConveyingSystems: path.resolve(__dirname, 'news/er-labs-conveying-systems/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify file watching; it is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});

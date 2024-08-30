import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import imagemin from 'vite-plugin-imagemin'
import purgecss from 'vite-plugin-purgecss'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      threshold: 10240,
      include: [
        /\.(js|mjs|json|css|html|wasm|ttf|otf|eot|svg|woff|woff2)$/i
      ]
    }),
    compression({
      algorithm: 'brotliCompress',
      threshold: 10240,
      include: [
        /\.(js|mjs|json|css|html|wasm|ttf|otf|eot|svg|woff|woff2)$/i
      ]
    }),
    imagemin({
      verbose: true,
      gifsicle: { optimizationLevel: 3 },
      optipng: { optimizationLevel: 5 },
      pngquant: { quality: [0.65, 0.90] },
      svgo: { plugins: [{ removeViewBox: false }] },
    }),
    purgecss({
      content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
    }),
  ],
  css: {
    modules: {
      scopeBehaviour: 'local',
    },
  },
})
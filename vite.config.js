import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Caminhos relativos: o build funciona na raiz de um domínio ou numa
  // subpasta (ex.: GitHub Pages em /Portifolio/) sem ajustes.
  base: './',
})

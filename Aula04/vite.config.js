import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Pages(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})

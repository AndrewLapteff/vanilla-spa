import templatePlugin from "./plugins/template-plugin"
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'es2017',
    outDir: 'build'
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
    hmr: true
  },
  plugins: [
    templatePlugin()
  ],
})
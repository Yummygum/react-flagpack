import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve(new URL('src/main.ts', import.meta.url).pathname),
      name: 'ReactFlagpack',
      formats: ['es'],
      fileName: 'react-flag'
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'flagpack-core'],
      output: {
        dir: 'dist',
        globals: {
          react: 'React',
        }
      }
    }
  }
})

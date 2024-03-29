import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve(new URL('src/main.ts', import.meta.url).pathname),
      name: 'FlagLibrary',
      formats: ['es', 'umd', 'cjs'],
      fileName: 'react-flag'
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'flagpack-core'],
      output: {
        banner: '"use client"',
        dir: 'dist',
        globals: {
          react: 'React',
        }
      }
    }
  }
})

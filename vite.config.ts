import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import markdownRawPlugin from 'vite-raw-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    markdownRawPlugin({
      fileRegex: /\.md$/
    })
  ],
  server: {
    port: 3000
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})

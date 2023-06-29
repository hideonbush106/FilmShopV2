import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import markdownRawPlugin from 'vite-raw-plugin'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV
    },
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
  }
})

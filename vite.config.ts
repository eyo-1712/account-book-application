// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react-swc'
import path from 'path'
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'shadcn',
        replacement: path.resolve(__dirname, './src/shared/shadcn'),
      },
      { find: 'shared', replacement: path.resolve(__dirname, './src/shared') },
      {
        find: 'features',
        replacement: path.resolve(__dirname, './src/features'),
      },
      {
        find: 'widgets',
        replacement: path.resolve(__dirname, './src/widgets'),
      },
      { find: 'pages', replacement: path.resolve(__dirname, './src/pages') },
    ],
  },
})

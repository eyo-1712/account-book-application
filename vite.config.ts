// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react-swc'
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

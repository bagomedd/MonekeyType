import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@icons': "/src/assets/icons/",
      '@styles': "/src/assets/styles/",
      '@fonts': "/src/assets/fonts/",

    },
  },
});

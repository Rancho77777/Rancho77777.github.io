import { defineConfig } from 'vite';

export default defineConfig({
  // 用户主页（username.github.io）的 base 就是 '/'
  base: '/',
  build: {
    outDir: 'dist',
  },
});

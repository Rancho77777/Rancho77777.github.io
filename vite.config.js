import { defineConfig } from 'vite';

export default defineConfig({
  // 用户主页（username.github.io）的 base 就是 '/'
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        home: 'index.html',
        about: 'about/index.html',
        info: 'info/index.html',
        photos: 'photos/index.html',
        motion: 'motion/index.html',
      },
    },
  },
});

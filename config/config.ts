import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  title: 'tomato-clock',
  npmClient: 'pnpm',
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss', 'umi-plugin-electron-builder'],
  routes,
  // routes:[]
});

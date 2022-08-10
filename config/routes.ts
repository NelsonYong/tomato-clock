import { IConfigFromPlugins } from '@/.umi/core/pluginConfig';

const routes: IConfigFromPlugins['routes'] = [
  {
    path: '/',
    title: 'home',
    component: '@/pages/Home',
  },
];

export default routes;

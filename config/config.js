import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  antd: {
    // dark: true,
    // compact: true,
  },
  // 开启骨架配置
  layout: {
    name: 'Ant Design',
    locale: true,
    layout: 'side',
  },
  //   mock: false,
});

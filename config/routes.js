export default [
  {
    name: '首页', // 侧边栏菜单标题（配置骨架才生效)
    exact: true, // 严格匹配
    path: '/',
    component: 'index',
  },
  {
    path: '/stu',
    name: '学员管理',
    routes: [
      {
        name: '学员列表',
        exact: true,
        path: '/stu/list',
        component: '@/pages/stu/list',
      },
      {
        name: '学员录入',
        exact: true,
        path: '/stu/pub',
        component: '@/pages/stu/pub',
      },
    ],
  },
];

import Layout from '@/platforms/demoSystem/layout/index.vue';
import AppMainSub from '@/platforms/demoSystem/layout/components/AppMainSub.vue';
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 * 异步路由的作用，对于没有权限的用户，不会存在路由
 */
export const demoRoutes = [
  {
    path: '/setting-manage',
    component: Layout,
    redirect: '/setting-manage/dictionaries-manage',
    hidden: false,
    name: 'setting-manage',
    meta: { title: '配置管理', icon: 'setting', noCache: true },
    children: [
      {
        path: 'dictionaries-manage',
        component: () => import('@/platforms/demoSystem/views/setting-manage/dictionaries-manage/index.vue'),
        name: 'dictionaries-manage',
        meta: { title: '字典模块管理' },
        children: [],
      },
    ],
  },
  {
    path: '/platform-manage',
    component: Layout,
    redirect: '/platform-manage/platform-authority',
    hidden: false,
    name: 'platform-manage',
    meta: { title: '平台管理', icon: 'skill', noCache: true },
    children: [
      {
        path: 'platform-authority',
        component: AppMainSub,
        name: 'platform-authority',
        redirect: '/platform-manage/platform-authority/authority-roles',
        meta: { title: '权限管理', Badge: true },
        children: [
          {
            path: 'authority-roles',
            component: () => import('@/platforms/demoSystem/views/platformManage/platformAuthorityManage/roleManage/index.vue'),
            name: 'authority-roles',
            meta: { title: '角色管理' },
          },
          {
            path: 'authority-permissions',
            component: () => import('@/platforms/demoSystem/views/platformManage/platformAuthorityManage/authoritySetting/index.vue'),
            name: 'authority-permissions',
            meta: { title: '权限分配' },
          },
        ],
      },
      {
        path: 'platform-menus',
        component: () => import('@/platforms/demoSystem/views/platformManage/platformMenus/index.vue'),
        name: 'platform-menus',
        meta: { title: '菜单管理' },
      },

    ],
  },
  {
    path: '/demo-tools',
    component: Layout,
    name: 'demo-tools',
    redirect: '/demo-tools/svg-demo',
    meta: { title: '工具展示', icon: 'handle', noCache: true },
    children: [
      {
        path: 'svg-demo',
        name: 'svg-demo',
        component: () => import('@demoSvgPage'),
        meta: { title: 'icon查看' },
      },
      {
        path: 'color-demo',
        name: 'color-demo',
        meta: { title: '色碼展示', icon: 'handle', noCache: true },
        component: () => import('@/platforms/demoSystem/views/demo/color-demo/index.vue'),
        children: [],
      },
      {
        path: 'typography-demo',
        name: 'typography-demo',
        meta: { title: '文字樣式', icon: 'handle', noCache: true },
        component: () => import('@/platforms/demoSystem/views/demo/typography-demo/index.vue'),
        children: [],
      },
      {
        path: 'default-page',
        name: 'default-page',
        meta: { title: 'DeMo頁面', icon: 'handle', noCache: true },
        component: () => import('@demoPage'),
        children: [],
      },
      {
        path: 'tab-demo',
        name: 'tab-demo',
        component: AppMainSub,
        redirect: '/demo-tools/tab-demo/tab1',
        meta: { title: 'TAB展示', Badge: true, BadgeKey: 'badgeKey' },
        children: [
          {
            path: 'tab1',
            name: 'tab1',
            component: () => import('@demoPage'),
            meta: { title: 'tab1', BadgeKey: 'badgeKey' },
          },
          {
            path: 'tab2',
            component: () => import('@demoPage'),
            name: 'tab2',
            meta: { title: 'tab2', BadgeKey: 'badgeKey' },
          },
          {
            path: 'tab3',
            name: 'tab3',
            component: () => import('@demoPage'),
            meta: { title: 'tab3', BadgeKey: 'badgeKey' },
          },
        ],
      },
    ],
  },
];

export default demoRoutes;

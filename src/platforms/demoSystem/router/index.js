import Vue from 'vue';
import Router from 'vue-router';
import demoRoutes from './demoRoutes';

/* Layout */
import Layout from '@/platforms/demoSystem/layout/index.vue';
// 解決重複路由的bug Navigation Duplicate
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(Router);

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
    BadgeKey:   'BadgeKey'       if set key, the sidebar or tabs will badge the content what you setting
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/404',
    name: '404',
    authory: true,
    component: () => import('@/platforms/demoSystem/views/error-page/404.vue'),
    hidden: true,
  },
  {
    path: '/401',
    name: '401',
    authory: true,
    component: () => import('@/platforms/demoSystem/views/error-page/401.vue'),
    hidden: true,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/platforms/demoSystem/views/login/index.vue'),
    hidden: true,
  },
  {
    path: '/',
    name: '/',
    authory: true,
    component: Layout,
    redirect: '/login', // 重定向到首页
  },
  // 404 page must be placed at the end !!!
  {
    path: '*',
    authory: true,
    redirect: '/404',
    hidden: true,
  },
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 * 异步路由的作用，对于没有权限的用户，不会存在路由
 */
export const asyncRoutes = [...demoRoutes];

const createRouter = () => new Router({
  mode: 'history', // require service support
  // 路由切换时，页面初始化滚动位置
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});

const router = createRouter();

router.addRoutes(asyncRoutes);

// 重刷路由，以后可以用，暂用不到, 权限变更后
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;

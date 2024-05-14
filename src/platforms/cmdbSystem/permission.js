import NProgress from 'nprogress'; // progress bar
import { find } from 'lodash';
import router from './router';
import setting from '@/settings';
import store from '@/platforms/cmdbSystem/store';

const SYSTEM_KEY = process.env.SYSTEM_KEY || 'demo';

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  if (['401', '404'].includes(to.name)) {
    next();
  } else {
    const userInfo = store.getters.name;
    if (!userInfo) {
      await store.dispatch('user/getInfo', { nonRedirect: true, nonVisibleMsg: true }).then(() => {
        next();
      }).catch(() => {
        next({ name: '404' });
      });
    }
    // 判断使用者有无权限
    const { appMenus, routeInfo } = store.getters;
    const { name: toRouteName } = to;
    // 取得目前有权限的第一个页面物件 （如果首页路由自动跳转 无权限需要使用到
    const firstAuthPath = find(appMenus, { vueRouterRedirect: false }, 0);
    const isAuthMenu = appMenus.find((menu) => menu.key === toRouteName);// api 回的menu 組成的有權限菜單列表
    const isPassAuth = routeInfo.find((vueRouter) => vueRouter.name === toRouteName && vueRouter.authory);// authory 可略過權限判斷
    if (isAuthMenu || isPassAuth) {
      next();
      // 有权限
    } else if (toRouteName === 'indexPage' && firstAuthPath) {
      next({ name: firstAuthPath.key });
    } else {
      // 没权限
      next({ name: '401' });
    }
  }
});

router.afterEach(() => {
  // 網站標籤文字 title
  // eslint-disable-next-line no-unused-expressions
  setting.titleObject[SYSTEM_KEY] && (document.title = setting.titleObject[SYSTEM_KEY].title);
  // finish progress bar
  NProgress.done();
});

export default router;

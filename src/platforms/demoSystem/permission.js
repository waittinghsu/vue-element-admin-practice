import NProgress from 'nprogress'; // progress bar
import router from './router';
import setting from '@/settings';
// import store from './store';

const SYSTEM_KEY = process.env.SYSTEM_KEY || 'demo';

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  // await store.dispatch('app/setAppMainSubBadge', {
  //   badgeKey: {
  //     tabDemo: Math.floor(Math.random() * 999),
  //     tab1: Math.floor(Math.random() * 999),
  //     tab2: Math.floor(Math.random() * 88),
  //     tab3: Math.floor(Math.random() * 55),
  //   },
  // });
  if (to.name === 'main') {
    // 首页获取用戶资讯
    // await store.dispatch('user/getUserInfo', { nonRedirect: true, nonVisibleMsg: true }).then(() => {
    //   next();
    // }).catch(() => {
    //   next();
    // });
  } else {
    // let userInfo = store.getters['userInfo'];
    // 判断使用者有无后台权限
    // userInfo?.management === undefined && await store.dispatch('user/getUserInfo').then(() => { userInfo = store.getters['userInfo']; });
    // if (!userInfo?.management) {
    //   next({ name: 'mainPage' });
    // }
    next();
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

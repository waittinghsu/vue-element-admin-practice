const getters = {
  // user 相關
  // user: state => state.user, // user vuex全部
  // userInfo: state => state.user.user,
  name: (state) => state.user.name,
  // username: state => state.user.user.name || 'Guest',
  // app 相關
  sidebar: (state) => state.app.sidebar,
  height: (state) => state.app.height,
  routes: (state) => state.app.routes, // vue-router 原始資料
  routeInfo: (state) => state.app.routeInfo, // vue-router 重新結構化
  appMenus: (state) => state.app.menus, // 重新結構化的菜單列表 與 vue-router 做過mapping
  menus: (state) => state.app.menus, // 重新結構化的菜單列表
  tabsBadge: (state) => state.app.tabsBadge, // appMainSub tabs badge 物件
  // settings 相關
  settings: (state) => state.settings,
};
export default getters;

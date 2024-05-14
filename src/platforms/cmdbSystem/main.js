import Vue from 'vue';

import Cookies from 'js-cookie';

import 'normalize.css/normalize.css'; // a modern alternative to CSS resets

import Element from 'element-ui';
import '@/styles/element-variables.scss';

import '@/styles/index.scss'; // global css

import moment from 'moment';
import echarts from 'echarts';
import jsx from 'vue-jsx';
import App from './App.vue';
import store from './store';

import '@/icons';
import router from './permission';
// import './utils/error-log' // error log  ==

import * as filters from '@/filters'; // global filters

// 引入權限控管
import permission from './directive/permission/permission';
import trimOnBlur from './directive/permission/trim-on-blur';

// 引入多語系
import i18n from './i18n';
// 引入echarts
Vue.filter('filterTime', (item) => moment(item).format('YYYY-MM-DD HH:mm:ss'));
Vue.prototype.$permission = permission;
Vue.directive('permission', permission);
Vue.directive('trim-on-blur', trimOnBlur);

Vue.prototype.$echarts = echarts;

// if(process.env.VUE_APP_ENV === "DEV"){}
// import App from './test/App3'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
// import { mockXHR } from '../mock'
// if (process.env.NODE_ENV === 'production') {
//   mockXHR()
// }

Vue.use(Element, {
  size: Cookies.get('size') || 'mini', // set element-ui default size
});

// register global utility filters
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

const Bus = new Vue(); // 空实例，作通信使用。所有通信KEY, 必须在这里面备注说明

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  jsx,
  data() {
    return {
      Bus,
    };
  },
  created() {
    // this.$root.Bus.$on('eventName', value=>{console.log("common", value)});
  },
  render: (h) => h(App),
});

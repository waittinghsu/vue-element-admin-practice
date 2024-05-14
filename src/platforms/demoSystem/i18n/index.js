import Vue from 'vue';
import VueI18n from 'vue-i18n';
/** 自定義語系包 */
import en_ui from 'element-ui/lib/locale/lang/en';
import zhCN_ui from 'element-ui/lib/locale/lang/zh-CN';
import store from '../store';
// import store from '../store';
import en from './lang/en';
import zhCN from './lang/zh-CN';
/** element-ui 語系包 */

Vue.use(VueI18n);

const locale = store.getters['i18n/locale'];

const i18n = new VueI18n({
  locale,
  messages: {
    en: { ...en, ...en_ui },
    'zh-CN': { ...zhCN, ...zhCN_ui },
  },
});

export default i18n;

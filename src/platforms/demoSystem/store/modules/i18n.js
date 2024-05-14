const i18nCookieKey = 'i18n_cookie_key';

const state = {
  locale: localStorage.getItem(i18nCookieKey) ? localStorage.getItem(i18nCookieKey) : 'zh-CN',
  langItems: [
    {
      key: 'zh-CN',
      value: '简体中文',
    },
    {
      key: 'en',
      value: 'English',
    },
  ],
};

const actions = {
  setI18n({ commit, state }, lang) {
    commit('SET_LOCALE', lang);
  },
};

const mutations = {
  SET_LOCALE(state, payload) {
    state.locale = payload;
    // console.log('omegas app', window.myVue.$i18n.locale);
    window.myVue.$i18n.locale = payload;
    localStorage.setItem(i18nCookieKey, payload);
  },
};

const getters = {
  locale: (state) => state.locale,
  localeName: (state) => state.langItems.find((langItem) => langItem.key === state.locale)?.value || '',
  langItems: (state) => state.langItems,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

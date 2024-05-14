// eslint-disable-next-line no-unused-vars
import { MessageBox, Message, Loading } from 'element-ui';
import { orderBy } from 'lodash';
import { getCommonUserinfo, postCommonLogout } from '@/platforms/demoSystem/apiService/public';
// import { getToken, setToken, removeToken } from '@/utils/auth'
// eslint-disable-next-line no-unused-vars
import router, { resetRouter } from '@/platforms/demoSystem/router';
// eslint-disable-next-line no-unused-vars
import menuMock from '../../mock/menuMock';
// eslint-disable-next-line no-unused-vars
import { getSSOUrl } from '@/utils';

const state = {
  userLoading: false,
  name: '',
  is_staff: false,
  is_active: true,
  date_joined: '',
  last_login: '',
  email: '',
  sa_authority: true,
  role: {},
  dept: {},
  menu: {},
};

const mutations = {
  SET_USER: (state, data) => {
    Object.keys(data).forEach((key) => {
      state[key] = data[key];
    });
  },
  SET_USER_LOADING: (state, data) => {
    state.userLoading = data;
  },
  SET_TOKEN: (state, data) => {

  },
};

const actions = {
  // get user info
  getInfo({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      getCommonUserinfo().then((res) => {
        const info = res.result || res.results;
        console.log(info);
        // if (!info || !info.data || !info.username) {
        //   Message({
        //     message: '获取数据不完整',
        //     type: 'error',
        //   });
        //   reject('接口信息不完整！');
        // }

        const data = {
          name: 'DemoGuest',
          is_staff: true,
          is_active: true,
          date_joined: '2018-07-02T13:31:00',
          last_login: '2018-07-02T13:31:00',
          email: 'demo@iv66.net',
          role: { name: '超级管理员_组', e_name: 'administrator' },
          dept: '',
          menu: orderBy(menuMock, ['sort']),
        };
        commit('SET_USER', data);

        // 处理路由数据 將api menu合併至 vue-router
        dispatch('app/setMenuPath', data.menu, { root: true });

        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      postCommonLogout(state.token).then(() => {
        commit('SET_TOKEN', '');
        // document.location.href = getSSOUrl();
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

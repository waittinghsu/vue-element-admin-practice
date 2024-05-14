/* eslint-disable */
/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time, 10);
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time *= 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日',
        '一',
        '二',
        '三',
        '四',
        '五',
        '六'][value];
    }
    if (result.length > 0 && value < 10) {
      value = `0${value}`;
    }
    return value || 0;
  });
  return time_str;
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if ((`${time}`).length === 10) {
    time = parseInt(time, 10) * 1000;
  } else {
    time = +time;
  }
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return '刚刚';
  } if (diff < 3600) {
    // less 1 hour
    return `${Math.ceil(diff / 60)}分钟前`;
  } if (diff < 3600 * 24) {
    return `${Math.ceil(diff / 3600)}小时前`;
  } if (diff < 3600 * 24 * 2) {
    return '1天前';
  }
  if (option) {
    return parseTime(time, option);
  }
  return (
    `${d.getMonth()
      + 1
    }月${
      d.getDate()
    }日${
      d.getHours()
    }时${
      d.getMinutes()
    }分`
  );
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf('?') + 1);
  const obj = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}

/**
 * @param {string} input value
 * @returns {number} output value
 */
export function byteLength(str) {
  // returns the byte length of an utf8 string
  let s = str.length;
  for (let i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i);
    if (code > 0x7f && code <= 0x7ff) s++;
    else if (code > 0x7ff && code <= 0xffff) s += 2;
    if (code >= 0xDC00 && code <= 0xDFFF) i--;
  }
  return s;
}

/**
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual) {
  const newArray = [];
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

/**
 * @param {Object} json
 * @returns {Array}
 */
export function param(json) {
  if (!json) return '';
  return cleanArray(
    Object.keys(json).map((key) => {
      if (json[key] === undefined) return '';
      return `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`;
    }),
  ).join('&');
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const [, search] = url.split('?');
  if (!search) {
    return {};
  }
  return JSON.parse(
    `{"${
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ')
    }"}`,
  );
}

/**
 * @param {string} val
 * @returns {string}
 */
export function html2Text(val) {
  const div = document.createElement('div');
  div.innerHTML = val;
  return div.textContent || div.innerText;
}

/**
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge(target, source) {
  if (typeof target !== 'object') {
    target = {};
  }
  if (Array.isArray(source)) {
    return source.slice();
  }
  Object.keys(source).forEach((property) => {
    const sourceProperty = source[property];
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty);
    } else {
      target[property] = sourceProperty;
    }
  });
  return target;
}

/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return;
  }
  let classString = element.className;
  const nameIndex = classString.indexOf(className);
  if (nameIndex === -1) {
    classString += `${className}`;
  } else {
    classString = classString.substr(0, nameIndex)
      + classString.substr(nameIndex + className.length);
  }
  element.className = classString;
}

/**
 * @param {string} type
 * @returns {Date}
 */
export function getTime(type) {
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90;
  }
  return new Date(new Date().toDateString());
}

export function pureDebounce(fn, delay = 1000) {
  let timer = null;
  function closure(...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
  return closure;
}

/**
 * 2023-0609 Truby 大哥 你這function 應該是 Throttle吧
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout; let args; let context; let timestamp; let
    result;

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp;

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args);
        // eslint-disable-next-line no-multi-assign
        if (!timeout) context = args = null;
      }
    }
  };

  return function (...args) {
    context = this;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      // eslint-disable-next-line no-multi-assign
      context = args = null;
    }

    return result;
  };
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone');
  }
  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr));
}

/**
 * @returns {string}
 */
export function createUniqueString() {
  const timestamp = `${+new Date()}`;
  const randomNum = `${parseInt((1 + Math.random()) * 65536, 10)}`;
  return (+(randomNum + timestamp)).toString(32);
}

/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp(`(\\s|^)${cls}(\\s|$)`));
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ` ${cls}`;
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp(`(\\s|^)${cls}(\\s|$)`);
    ele.className = ele.className.replace(reg, ' ');
  }
}

/**
 * 获取OA地址
 * @returns {string}
 */
export function getOADomain() {
  let host = '';
  console.log(process.env.VUE_APP_ENV);
  if (process.env.VUE_APP_ENV === 'DEV') {
    host = 'feitian.bagunai.com';
  } else if (process.env.VUE_APP_ENV === 'STG') {
    host = 'stg-oa.pai9.net';
  } else {
    host = 'feitian.bstops.com';
  }
  return host;
}

/**
 * 获取SSO地址
 * @returns {string}
 */
export function getSSOUrl() {
  const { host, protocol } = document.location;
  const tempCurrentUrl = encodeURIComponent(`${protocol}//${host}`);
  // const SYSTEM_KEY = process.env.SYSTEM_KEY;
  const redirectDic = {
    LOCAL: { url: host },
    DEV: { url: 'sso.bagunai.com' },
    PROD: { url: 'sso.bstops.com' },
  };
  const ssoUrl = redirectDic?.[process.env.VUE_APP_ENV] || redirectDic.PROD;
  // 如果有新系統不走new sso 做例外處裡
  // if ([ 'sso', 'cicd', 'domain' ].includes(SYSTEM_KEY) && ssoUrl?.url) {
  //   return `${protocol}//${ssoUrl.url}/sso/main?url=${tempCurrentUrl}`;
  // }

  return `${protocol}//${ssoUrl.url}/sso/main?url=${tempCurrentUrl}`;
}

// 全型轉半型
export function ToCDB(str) {
  let tmp = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === 12288) {
      tmp += String.fromCharCode(str.charCodeAt(i) - 12256);
      // eslint-disable-next-line no-continue
      continue;
    }
    if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
      tmp += String.fromCharCode(str.charCodeAt(i) - 65248);
    } else {
      tmp += String.fromCharCode(str.charCodeAt(i));
    }
  }
  return tmp;
}

// 域名規則檢測
export function checkDomain(str) {
  const reg = new RegExp('^((?!-)[A-Za-z0-9-\u4e00-\u9fa5]{1,63}(?<!-)\\.)+[A-Za-z]{2,6}');
  return !!str.match(reg);
}

/**
 *  創建密碼亂數
 * @param length 密碼長度
 * @param chart 可產生的字符
 * @returns {string}
 */
const CHART_STRING = 'abcdefghijklmonpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
export function makeRandomString(length = 16, chart = CHART_STRING) {
  let res = '';
  for (let count = 0, n = chart.length; count < length; ++count) {
    res += chart.charAt(Math.floor(Math.random() * n));
  }
  return res;
}
/**
 * 遞迴重新產生 menus 結構
 * @param {string} menus 菜單陣列
 * @param {string} id 父節點代號
 * @param {number} level 層級
 * @returns {Array}
 */
export function formatMenus(menus, id, level = 0) {
  const output = [];
  if (menus && menus.length > 0) {
    level += 1;
    menus.forEach((menuInfo) => {
      const key = menuInfo?.key || menuInfo?.key1 || 'menu-error';
      const nowId = `${id}-${key}`;
      // sso全權限的回傳key為 children :::::: 域名系統權限的回傳key為button_children
      const originChildren = menuInfo?.children || menuInfo?.button_children;
      const permission = originChildren?.map((item) => (item?.key || item?.key1)) || [];
      // 遞迴處理 子層菜單
      const children = formatMenus(originChildren, nowId, level);
      // child菜單的權限key （字串分割 pid 根據level 層級組合成 （父－本層） ex: root-mainPage-page-bulletin-button => bulletin-button
      const childPermission = children.map((o) => `${o.pid}-${o.key}`?.split('-')?.splice(level + 1)?.join('-'));
      // console.log(id, level, menuInfo.name, Array.from(new Set([...permission, ...childPermission])));
      // console.log(nowId, key, menuInfo.name, `le:${children.length}`, children);
      /**
       * 判斷是否為按鈕
       * １．檢查 key 是否有 action operational
       * ２．檢查 key 在字首
       * @param {Object} child
       * @param {Object} child.key 唯一值 有些系統 為key1
       * @return {boolean}
       */
      function isButton(child) {
        // console.log(child.name, child.type, child);
        const childKey = child?.key || child?.key1 || 'menu-error';
        const buttonKey = ['action', 'operational'];
        let flag = false;
        buttonKey.forEach((key) => {
          childKey.indexOf(key) === 0 && (flag = true);
        });
        return flag;
      }

      output.push(
        {
          key,
          name: menuInfo.name,
          sort: menuInfo?.sort || 0,
          id: nowId, // 结点ID
          pid: id, // 父结点ID
          level, // 层次
          vueRouterRedirect: false, // 判斷路由是否有轉址
          permissions: Array.from(new Set([...permission, ...childPermission])), // 包含的所有子層次的權限
          childrenLength: originChildren?.length || 0, // 孩子的數量
          childrenPageLength: originChildren?.filter((child) => !isButton(child))?.length || 0, // 子頁面的數量
        },
        ...children,
      );
    });
  }
  return output;
}

/**
 * 遞迴重新產生 route 結構
 * @param {string} routes 路由列表
 * @param {string} id 父節點代號
 * @param {string} parentPath 路由url
 * @returns {Array}
 */
export function formatRoute(routes, id, parentPath) {
  const output = [];
  if (routes && routes.length > 0) {
    routes.forEach((route) => {
      const nId = `${id}-${route.name}`;
      // 父路'尾巴'與子路徑'頭'有無斜線 做路徑串接
      const slash = route.path.startsWith('/') || parentPath.endsWith('/') ? '' : '/';
      const path = `${parentPath}${slash}${route.path}`;
      output.push(
        {
          path,
          id: nId,
          meta: route.meta,
          name: route.name,
          hidden: route.hidden,
          authory: route.authory,
          redirect: !!route?.redirect,
        },
        ...formatRoute(route.children, nId, path),
      );
    });
  }
  return output;
}

/**
 * 遞迴建立菜單２元樹
 * @param {array} topParentList 菜單列表 樹的頂端
 * @param {array} menuList 菜單列表 （水平資料）
 * @param {string} parentKey 父節點代號
 * @param {string} mainId 父節點代號
 * @returns {Array}
 */
export function buildBinaryTree(topParentList = [], menuList = [], parentKey = 'parent_id', mainId = 'id') {
  const temp = [];
  topParentList.forEach((menu) => {
    const getChildren = menuList.filter((item) => item[parentKey] === menu[mainId]);
    temp.push({ ...menu, children: [...buildBinaryTree(getChildren, menuList, parentKey, mainId)] });
  });
  return temp;
}

/**
 * 攤平２元樹
 * 將children 內的物件攤分出來
 * @param menus 菜單
 * @returns {*[]}
 */
export function flattenBinaryTree(menus) {
  const res = [];
  menus.forEach((item) => {
    if (item?.children?.length > 0) {
      res.push({ ...item }, ...flattenBinaryTree(item.children));
    } else {
      res.push({ ...item });
    }
  });
  return res;
}

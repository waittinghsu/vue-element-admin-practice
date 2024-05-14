const path = require('path');

let loadJson = {};
try {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  loadJson = require(path.resolve(process.cwd(), `src/codegen/${process.env.npm_lifecycle_event.split(':').pop()}_json2service.json`));
  const url = new URL(loadJson.remoteUrl);
  loadJson.token = url.searchParams.get('token');
  loadJson.pid = url.searchParams.get('pid');
  loadJson.server = url.origin;
  loadJson.d = process.env.npm_lifecycle_event.split(':');
} catch (e) {
  console.log('json error do simple');
}

const server = loadJson.server || 'http://127.0.0.1:3030';

const token = loadJson.token || 'aed7178742fa2e616b04ac19561e2b2b4e6bd5ada695a77cf141de1fbd1447a4';

const projectId = loadJson.pid || '15';

const methodName = function (api_path, method) {
  const { customFilterString = [] } = this;
  const filterString = [
    ...customFilterString,
    '{',
    '}',
    'api',
    'v1',
    'mock',
    ':',
  ];
  // 重組url字串
  const apiPath = api_path
    .replace(/:(\w+)/g, 'by-$1')// 將格式為 :id 取代為 by-id
    .replace(/{(\w+)}/g, 'by-$1')// 將格式為 {id} 取代為 by-id
    .replace(/[-_}=]/g, '/');// 將 _ 或 -  改為斜線

  const urlPathArr = filterString.reduce((acc, txt) => {
    const pattern = new RegExp(`\\b${txt}\\b`, 'g');
    return acc.replace(pattern, '');
  }, apiPath).split('/').filter(Boolean);

  let name = [];

  if (urlPathArr.length > 1) {
    name = urlPathArr;
  } else if (urlPathArr.length === 1) {
    name = [].concat(name, [urlPathArr[0]]);
  }

  name = name.map((str) => {
    let tempStr = '';
    // 只允許 a-zA-Z0-9\_ 字串為function name
    tempStr = str.replace(/[^a-zA-Z0-9_]+/g, '');
    tempStr = tempStr.substring(0, 1).toUpperCase() + tempStr.substring(1);
    return tempStr;
  });
  name = [method.toLowerCase(), ...name];
  // console.log('final name', name);
  return name.join('');
};

const globalCode = '';

const template = '';

const moduleMode = true;

const distFile = null;

const distFolder = path.resolve(process.cwd(), process.env.API_GEN_FOLDER || 'src/apiService');

const useCustomHttpRequest = true;

const httpRequestPath = loadJson.httpRequestPath || '@/utils';

const customFilterString = loadJson.customFilterString || [];

module.exports = {
  server,
  token,
  projectId,
  globalCode,
  methodName,
  template,
  moduleMode,
  distFile,
  distFolder,
  useCustomHttpRequest,
  httpRequestPath,
  customFilterString,
};

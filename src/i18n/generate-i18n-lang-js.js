const path = require('path');
// eslint-disable-next-line import/no-dynamic-require
const option = require(path.resolve(process.cwd(), 'i18n-to-js.config.js'));
const { getLocalExcel, parseLocalExcel } = require('./xlsxToJs/parseExcel');
const { mkFile, genCodeByObj, deleteDir } = require('./xlsxToJs');

const code = async (option) => {
  const config = { ...option }; // 全局變數
  // checkConfig(config);
  await deleteDir(config.distFolder); // 除指定資料夾
  const { sheet: findSheet } = config;
  const fileData = getLocalExcel(config);
  const fileContent = await parseLocalExcel(fileData, findSheet);
  console.log('==omega==', fileContent);
  await Promise.all(Object.keys(fileContent).map((fileName) => {
    mkFile(config.distFolder, genCodeByObj(fileContent[fileName]), fileName);
    // console.log(`Promise : ${fileName}`);
    return fileName;
  }));
};
code(option).then(() => {
  // console.log('END');
});

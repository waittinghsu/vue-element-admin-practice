const XLSX = require('xlsx');

/**
 * @brief 尋找檔案
 * @return {Object}
 * @date 2023-05-20 */
function getLocalExcel(config) {
  const { sourceFilePath } = config;
  return XLSX.readFile(sourceFilePath, { type: 'array' });
}

/**
 * @brief 解析Excel
 * Promise 搭配 map 用法 讓async await運作
 * 1. 擷取表頭 建立 output 檔名key 預設值
 * 2. getRows 建立多國語系mapping 物件
 * @return {Object} { en: {}, 'zh-CN': {} }
 * @date 2020-07-31 */
async function parseLocalExcel(mySheetData, findSheet = []) {
  const { SheetNames, Sheets } = mySheetData;
  const isExistSheets = findSheet.filter((configSheetName) => SheetNames.includes(configSheetName));
  // console.log(isExistSheets);
  return isExistSheets.reduce((mergeLang, sheetName) => {
    // header: 1 回傳的array 第一筆為 所有的headerKey 拿到語系分類
    let [headerKeys] = XLSX.utils.sheet_to_json(Sheets[sheetName], { header: 1 });
    headerKeys = headerKeys.filter((headerKey) => headerKey !== 'key'); // 移除單詞 key  ['key', 'en', 'zh-cn'] => ['en', 'zh-cn']
    // 建立 headerKey object {en: {}} 初始化
    const headerObj = headerKeys.reduce((accHeader, headerK) => ({ ...accHeader, [headerK]: {} }), {});
    // Array[Object] 表格sheet 內容 [{key: x, en: '??', 'zh-cn': 'XX'}, ...]
    const sheetRows = XLSX.utils.sheet_to_json(Sheets[sheetName], { header: 0 });
    // 重新組合語系資料格式
    const sheetData = sheetRows.reduce(
      (sheetAcc, sheetItem) => {
        headerKeys.forEach((headerKey) => {
          sheetAcc[headerKey] ||= {}; // 初始化
          Object.assign(sheetAcc[headerKey], { [sheetItem.key]: sheetItem[headerKey] });
        });
        return sheetAcc;
      },
      { ...headerObj },
    );

    headerKeys.forEach((headerKey) => {
      mergeLang[headerKey] || (mergeLang[headerKey] = {}); // 初始化
      Object.assign(mergeLang[headerKey], { ...sheetData[headerKey] });
    });

    return mergeLang;
  }, {});
}

module.exports = {
  getLocalExcel, parseLocalExcel,
};

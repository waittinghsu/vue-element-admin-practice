const fs = require('fs');
const { genCodeByObj } = require('./genCode');
const mkDirByPathSync = require('./makeDir');
const deleteDir = require('./deleteDir');

/**
 * @brief 建立檔案
 * 1. 與外部合併 設定檔 i18n-to-js.config.js
 * 2. checkConfig() 判斷特定欄位正確性
 * 3. 重建folder
 * @param distPath
 * @param content
 * @param fileName
 * @return 無.
 * @date 2020-08-05 */
const mkFile = async (distPath, content, fileName) => {
  await mkDirByPathSync(distPath); // 再重新創建資料夾
  fs.writeFile(`${distPath}/${fileName}.js`, content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Write operation complete 💪🤗🤗.  ${distPath}/${fileName}.js`);
    }
  });
};

module.exports = {
  genCodeByObj, mkDirByPathSync, deleteDir, mkFile,
};

module.exports = {
  mode: 'LOCAL',
  excelProjectToken: '',
  useApiKey: '',
  sheet: ['global', 'cdn'],
  // distFile: path.resolve(process.cwd(), 'lang.js'), // 檔案輸出至單一檔案 (moduleMode為true時會自動省略)
  distFolder: 'src/i18n/lang', // 檔案輸出資料夾
  sourceFilePath: 'src/i18n/i18nLanguageDictionary.xlsx', // mode = LOCAL 時需要配置 讀取的檔案位置sourceFilePath
};

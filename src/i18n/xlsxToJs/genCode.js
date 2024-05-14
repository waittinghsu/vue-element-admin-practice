const genCodeByObj = (Obj) => {
  let code = '';
  // code = `/* eslint-disable */\n`;
  code += `export default ${JSON.stringify(Obj, undefined, 2).replaceAll('"', '\'')};\n`;
  // console.log(code);
  return code;
};

module.exports = { genCodeByObj };

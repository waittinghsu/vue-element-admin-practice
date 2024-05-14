const fs = require('fs');
const path = require('path');

module.exports = function mkDirByPathSync(
  targetDir,
  { isRelativeToScript = false } = {},
) {
  const { sep } = path;

  const initDir = path.isAbsolute(targetDir) ? sep : '';

  const baseDir = isRelativeToScript ? __dirname : '.';

  targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(baseDir, parentDir, childDir);

    try {
      fs.mkdirSync(curDir);
    } catch (err) {
      if (err.code !== 'EEXIST') {
        throw err;
      }
      // console.log(`Directory ${curDir} already exists!`);
    }

    return curDir;
  }, initDir);
};

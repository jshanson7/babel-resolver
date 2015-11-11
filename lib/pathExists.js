var fs = require('fs');

module.exports = function pathExists(pathOrFile) {
  try {
    var stats = fs.statSync(pathOrFile);
    return stats.isFile() || stats.isDirectory();
  } catch (err) {
    return false;
  }
};

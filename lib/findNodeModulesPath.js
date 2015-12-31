var resolve = require('path').resolve;
var separator = require('path').sep;
var pathExists = require('./pathExists');

module.exports = function findNodeModulesPath(baseDir) {
  var dirsToCheck = baseDir.split(separator);
  var currentPath;
  while (dirsToCheck.length) {
    currentPath = resolve(dirsToCheck.join(separator), 'node_modules');
    if (pathExists(currentPath)) { return currentPath; }
    dirsToCheck.pop();
  }
};

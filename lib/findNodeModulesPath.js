var resolve = require('path').resolve;
var pathExists = require('./pathExists');

module.exports = function findNodeModulesPath(baseDir) {
  var dirsToCheck = baseDir.split('/');
  var currentPath;
  while (dirsToCheck.length) {
    currentPath = resolve(dirsToCheck.join('/'), 'node_modules');
    if (pathExists(currentPath)) { return currentPath; }
    dirsToCheck.pop();
  }
};

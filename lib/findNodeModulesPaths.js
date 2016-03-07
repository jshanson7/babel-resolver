var resolve = require('path').resolve;
var separator = require('path').sep;
var pathExists = require('./pathExists');

module.exports = function findNodeModulesPaths(baseDir) {
  baseDir = resolve(baseDir);
  var dirsToCheck = baseDir.split(separator);
  var nodeModulesPaths = [];
  var currentPath;
  while (dirsToCheck.length) {
    currentPath = resolve(dirsToCheck.join(separator), 'node_modules');
    if (pathExists(currentPath)) { nodeModulesPaths.push(currentPath); }
    dirsToCheck.pop();
  }
  return nodeModulesPaths;
};

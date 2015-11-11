var resolve = require('path').resolve;
var pathIsRelative = require('./pathIsRelative');
var findNodeModulesPath = require('./findNodeModulesPath');
var autoExtensionedPathExists = require('./autoExtensionedPathExists');

module.exports = function createBabelResolver() {
  var moduleDirsToCheck = Array.prototype.slice.call(arguments);
  var nodeModulesPath = findNodeModulesPath(__dirname);
  var extensionsToTry = ['.js', '.json'];

  if (nodeModulesPath && moduleDirsToCheck.indexOf(nodeModulesPath) === -1) {
    moduleDirsToCheck.unshift(nodeModulesPath);
  }

  return function resolveModuleSource(source) {
    if (pathIsRelative(source)) { return source; }

    var currentPath;
    var foundModuleDir = moduleDirsToCheck.find(function (dir) {
      currentPath = resolve(dir, source);
      return autoExtensionedPathExists(currentPath, extensionsToTry);
    });

    return foundModuleDir ? currentPath : source;
  };
};

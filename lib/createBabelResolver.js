var findNodeModulesPath = require('./findNodeModulesPath');
var resolveModuleSource = require('./resolveModuleSource');

module.exports = function createBabelResolver() {
  var moduleDirsToCheck = Array.prototype.slice.call(arguments);
  var nodeModulesPath = findNodeModulesPath(__dirname);
  var extensionsToTry = ['.js', '.json'];

  if (nodeModulesPath && moduleDirsToCheck.indexOf(nodeModulesPath) === -1) {
    moduleDirsToCheck.unshift(nodeModulesPath);
  }

  return function (source) {
    return resolveModuleSource(source, moduleDirsToCheck, extensionsToTry);
  };
};


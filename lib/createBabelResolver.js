var findNodeModulesPaths = require('./findNodeModulesPaths');
var resolveModuleSource = require('./resolveModuleSource');

module.exports = function createBabelResolver() {
  var nodeModulesPaths = findNodeModulesPaths(__dirname);
  var moduleDirsToCheck = nodeModulesPaths.concat(Array.prototype.slice.call(arguments));
  var extensionsToTry = ['.js', '.json', '.jsx'];

  return function (source) { return resolveModuleSource(source, moduleDirsToCheck, extensionsToTry); };
};


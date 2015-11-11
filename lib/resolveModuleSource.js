var resolve = require('path').resolve;
var pathIsRelative = require('./pathIsRelative');
var autoExtensionedPathExists = require('./autoExtensionedPathExists');

module.exports = function resolveModuleSource(source, moduleDirsToCheck, extensionsToTry) {
  if (pathIsRelative(source)) { return source; }

  var currentPath;
  var foundModuleDir = moduleDirsToCheck.find(function (dir) {
    currentPath = resolve(dir, source);
    return autoExtensionedPathExists(currentPath, extensionsToTry);
  });

  return foundModuleDir ? currentPath : source;
};

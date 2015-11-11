var fs = require('fs');
var path = require('path');
var resolve = path.resolve;
var extname = path.extname;

module.exports = function createBabelResolver() {
  var moduleDirsToCheck = Array.prototype.slice.call(arguments);
  var nodeModulesPath = findNodeModulesPath();
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

function findNodeModulesPath() {
  var dirsToCheck = __dirname.split('/');
  var currentPath;
  while (dirsToCheck.length) {
    currentPath = resolve(dirsToCheck.join('/'), 'node_modules');
    if (pathExists(currentPath)) { return currentPath; }
    dirsToCheck.pop();
  }
}

function pathIsRelative(pathOrFile) {
  return /^\./.test(pathOrFile);
}

function autoExtensionedPathExists(pathOrFile, extensionsToTry) {
  return pathExists(pathOrFile) ? true :
    extname(pathOrFile).length ? false :
    extensionsToTry.find(function (ext) { return pathExists(pathOrFile + ext); }) ? true :
    false;
}

function pathExists(pathOrFile) {
  try {
    var stats = fs.statSync(pathOrFile);
    return stats.isFile() || stats.isDirectory();
  } catch (err) {
    return false;
  }
}

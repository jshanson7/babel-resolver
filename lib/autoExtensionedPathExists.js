var extname = require('path').extname;
var pathExists = require('./pathExists');

module.exports = function autoExtensionedPathExists(pathOrFile, extensionsToTry) {
  return pathExists(pathOrFile) ? true :
    extname(pathOrFile).length ? false :
    extensionsToTry.find(function (ext) { return pathExists(pathOrFile + ext); }) ? true :
    false;
};

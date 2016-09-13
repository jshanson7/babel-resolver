var pathExists = require('./pathExists');

module.exports = function autoExtensionedPathExists(pathOrFile, extensionsToTry) {
  var findByExtension = function () {
    return extensionsToTry.find(function (ext) {
      return pathExists(pathOrFile + ext);
    });
  };

  return pathExists(pathOrFile) || findByExtension();
};

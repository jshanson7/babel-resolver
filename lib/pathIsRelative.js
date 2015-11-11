module.exports = function pathIsRelative(pathOrFile) {
  return /^\./.test(pathOrFile);
};

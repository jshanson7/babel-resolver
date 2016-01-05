var assert = require('assert');
var resolve = require('path').resolve;
var findNodeModulesPaths = require('../lib/findNodeModulesPaths');

function getFullPath(relativePath) {
  return resolve(__dirname, relativePath);
}

describe('findNodeModulesPaths()', function () {
  it('finds node_modules', function () {
    assert(findNodeModulesPaths(__dirname)[0] === getFullPath('../node_modules'));
  });
});

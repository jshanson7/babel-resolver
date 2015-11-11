var assert = require('assert');
var resolve = require('path').resolve;
var findNodeModulesPath = require('../lib/findNodeModulesPath');

function getFullPath(relativePath) {
  return resolve(__dirname, relativePath);
}

describe('findNodeModulesPath()', function () {
  it('finds node_modules', function () {
    assert(findNodeModulesPath(__dirname) === getFullPath('../node_modules'));
  });
});

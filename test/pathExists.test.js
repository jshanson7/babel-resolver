var assert = require('assert');
var resolve = require('path').resolve;
var pathExists = require('../lib/pathExists');

function getFullPath(relativePath) {
  return resolve(__dirname, relativePath);
}

describe('pathExists()', function () {
  it('existing dir', function () {
    assert(pathExists(getFullPath('../example-app/lib')));
  });

  it('non-existing dir', function () {
    assert(!pathExists(getFullPath('../example-app/foo')));
  });

  it('existing file with .js extension', function () {
    assert(pathExists(getFullPath('../example-app/models/User.js')));
  });

  it('non-existing file with .js extension', function () {
    assert(!pathExists(getFullPath('../example-app/models/foo.js')));
  });

  it('existing file with .json', function () {
    assert(pathExists(getFullPath('../example-app/models/data.json')));
  });

  it('non-existing file with .json extension', function () {
    assert(!pathExists(getFullPath('../example-app/models/foo.json')));
  });
});

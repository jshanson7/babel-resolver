var assert = require('assert');
var resolve = require('path').resolve;
var autoExtensionedPathExists = require('../lib/autoExtensionedPathExists');

function pathExists(path) {
  return autoExtensionedPathExists(path, ['.js', '.json']);
}

function getFullPath(relativePath) {
  return resolve(__dirname, relativePath);
}

describe('autoExtensionedPathExists()', function () {
  it('existing dir', function () {
    assert(pathExists(getFullPath('test-app/lib')));
  });

  it('non-existing dir', function () {
    assert(!pathExists(getFullPath('test-app/foo')));
  });

  it('existing file with no extension', function () {
    assert(pathExists(getFullPath('test-app/lib/relativeImport')));
  });

  it('non-existing file with no extension', function () {
    assert(!pathExists(getFullPath('test-app/lib/foo')));
  });

  it('existing file with .js extension', function () {
    assert(pathExists(getFullPath('test-app/models/User.js')));
  });

  it('non-existing file with .js extension', function () {
    assert(!pathExists(getFullPath('test-app/models/foo.js')));
  });

  it('existing file with .json', function () {
    assert(pathExists(getFullPath('test-app/models/data.json')));
  });

  it('non-existing file with .json extension', function () {
    assert(!pathExists(getFullPath('test-app/models/foo.json')));
  });
});

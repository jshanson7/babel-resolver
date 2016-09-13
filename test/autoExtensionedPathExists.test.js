var assert = require('assert');
var resolve = require('path').resolve;
var autoExtensionedPathExists = require('../lib/autoExtensionedPathExists');

function pathExists(path) {
  return autoExtensionedPathExists(path, ['.js', '.json', '.jsx']);
}

function getFullPath(relativePath) {
  return resolve(__dirname, relativePath);
}

describe('autoExtensionedPathExists()', function () {
  it('existing dir', function () {
    assert(pathExists(getFullPath('../example-app/lib')));
  });

  it('non-existing dir', function () {
    assert(!pathExists(getFullPath('../example-app/foo')));
  });

  it('existing file with no extension', function () {
    assert(pathExists(getFullPath('../example-app/lib/relativeImport')));
  });

  it('non-existing file with no extension', function () {
    assert(!pathExists(getFullPath('../example-app/lib/foo')));
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

  it('existing file with .jsx', function () {
    assert(pathExists(getFullPath('../example-app/views/UserList.jsx')));
  });

  it('non-existing file with .jsx extension', function () {
    assert(!pathExists(getFullPath('../example-app/views/foo.jsx')));
  });

  it('existing file with .react.js extension (multiple file extensions)', function () {
    assert(pathExists(getFullPath('../example-app/views/MultipleFileExtensions.react.js')));
  });

  it('non-existing file with .react.js extension (multiple file extensions)', function () {
    assert(!pathExists(getFullPath('../example-app/views/foo.react.js')));
  });
});

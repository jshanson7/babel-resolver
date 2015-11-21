var assert = require('assert');
var resolve = require('path').resolve;
var resolveModuleSource = require('../lib/resolveModuleSource');
var exampleAppDir = resolve(__dirname, '../example-app');
var exampleAppLibDir = resolve(__dirname, '../example-app/lib');
var nodeModulesDir = resolve(__dirname, '../node_modules');

function resolveSource(source) {
  return resolveModuleSource(
    source,
    [nodeModulesDir, exampleAppDir, exampleAppLibDir],
    ['.js', '.json', '.jsx']
  );
}

describe('resolveModuleSource()', function () {
  it('returns provided source for non-existant module', function () {
    assert(resolveSource('foo') === 'foo');
  });

  it('returns provided source for relative module', function () {
    assert(resolveSource('./foo') === './foo');
  });

  it('returns provided source for native module', function () {
    assert(resolveSource('path') === 'path');
    assert(resolveSource('fs') === 'fs');
  });

  it('returns node_modules path for external module', function () {
    assert(resolveSource('mocha') === resolve(nodeModulesDir, 'mocha'));
  });

  it('returns local path for local module', function () {
    assert(resolveSource('models/User') === resolve(exampleAppDir, 'models/User'));
    assert(resolveSource('utils') === resolve(exampleAppLibDir, 'utils'));
  });
});

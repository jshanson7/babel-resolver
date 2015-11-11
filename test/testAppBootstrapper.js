var resolve = require('path').resolve;
var localModulesDir = resolve(__dirname, 'test-app');
var anotherDirToCheck = resolve(__dirname, 'test-app/lib');
var resolver = require('../')(localModulesDir, anotherDirToCheck);

require('babel-core/register')({
  presets: ['es2015'],
  resolveModuleSource: resolver
});

require('./test-app');
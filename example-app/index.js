var resolve = require('path').resolve;
var localModulesDir = __dirname;
var anotherDirToCheck = resolve(__dirname, 'lib');
var resolver = require('..')(localModulesDir, anotherDirToCheck);

require('babel-core/register')({
  presets: ['es2015'],
  resolveModuleSource: resolver
});

require('./app');

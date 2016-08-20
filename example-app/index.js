var path = require('path');
var localModulesDir = __dirname;
var anotherDirToCheck = path.resolve(__dirname, 'lib');
var resolver = require('..')(localModulesDir, anotherDirToCheck);

require('babel-register')({
  presets: ['es2015'],
  resolveModuleSource: resolver
});

require('./app');

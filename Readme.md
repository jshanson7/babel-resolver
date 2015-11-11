# Babel Resolver [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url]

Resolve imported modules from any directory.

```javascript
import User from '../../models/User';

```
Becomes:

```javascript
import User from 'models/User';

```

## Usage

Using [Babel 6](http://babeljs.io/) & [`babel-core/register`](http://babeljs.io/docs/usage/require/):

```javascript
var resolve = require('path').resolve;
var localModulesDir = resolve(__dirname, 'app');
var anotherDirToCheck = resolve(__dirname, 'app/lib');
var resolver = require('babel-resolver')(localModulesDir, anotherDirToCheck);

require('babel-core/register')({
  presets: ['es2015'],
  resolveModuleSource: resolver
});
require('./app');

```
**Note:** Run `rm -rf ~/.babel.json` before use to clear babel's cache.  If you're seeing errors, try this again.
**Note2:** Babel's `resolveModuleSource` is currently only called when you use `import 'module'`, not when use `require('module')`

Also, keep in mind that you must provide absolute directory paths to `babel-resolver`.

## Installation

```
npm i babel-resolver --save
rm -rf ~/.babel.json

```

## Why not just set `NODE_PATH=app`?

Setting `NODE_PATH` is a perfectly valid solution.  `babel-node` is for those who:
- find environment variables annoying
- want to resolve modules from more than one directory

```
npm i babel-resolver --save
rm -rf ~/.babel.json

```

## License

MIT

[npm-image]: https://badge.fury.io/js/babel-resolver.svg
[npm-url]: https://npmjs.org/package/babel-resolver
[travis-image]: https://travis-ci.org/jshanson7/babel-resolver.svg
[travis-url]: https://travis-ci.org/jshanson7/babel-resolver

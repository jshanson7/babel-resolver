# Babel Resolver [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url] [![Coverage status][coveralls-image]][coveralls-url]

Resolve modules from any directory.

```javascript
import User from '../../models/User';
```
Becomes:

```javascript
import User from 'models/User';
```

## Usage

*In app/index.js:*

```javascript
require('babel-register')({
  presets: ['es2015'], // required for 'import'
  resolveModuleSource: require('babel-resolver')(__dirname)
});

require('./app');
```

*In app/app.js:*

```javascript
import User from 'models/User';
// => resolves: "app/models/User.js"
```

This example uses [Babel 6](http://babeljs.io/) and [`babel-register`](http://babeljs.io/docs/usage/require/).

If you wish to define options in .babelrc, use the [Babel Resolver Plugin](https://github.com/jshanson7/babel-plugin-resolver) instead.

**Note:** Run `rm -rf ~/.babel.json` if you're seeing errors.

**Note2:** Babel's `resolveModuleSource` is only called when you use `import`, not `require`.

Also, keep in mind that you must provide absolute directory paths to `babel-resolver`.


## Resolving Multiple Directories

*In app/index.js:*

```javascript
var path = require('path');
var localModulesDir = __dirname;
var anotherDirToCheck = path.resolve(__dirname, 'lib');

require('babel-register')({
  presets: ['es2015'],
  resolveModuleSource: require('babel-resolver')(localModulesDir, anotherDirToCheck)
});
require('./app');
```

*In app/app.js:*

```javascript
import User from 'models/User';
// => resolves: "app/models/User.js"

import somethingInLib from 'somethingInLib';
// => resolves: "app/lib/somethingInLib.js"
```

## Installation

```
npm i babel-resolver --save
rm -rf ~/.babel.json
```

## Why not just set NODE_PATH?

While setting `NODE_PATH=app` is a perfectly valid solution, `babel-resolver` is more explicit and lets you avoid mucking around with environment variables.

## License

MIT

[npm-image]: https://badge.fury.io/js/babel-resolver.svg
[npm-url]: https://npmjs.org/package/babel-resolver
[travis-image]: https://travis-ci.org/jshanson7/babel-resolver.svg
[travis-url]: https://travis-ci.org/jshanson7/babel-resolver
[coveralls-image]: https://coveralls.io/repos/jshanson7/babel-resolver/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/jshanson7/babel-resolver?branch=master

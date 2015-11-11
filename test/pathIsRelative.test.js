var assert = require('assert');
var pathIsRelative = require('../lib/pathIsRelative');

describe('pathIsRelative()', function () {
  it('relative path', function () {
    assert(pathIsRelative('../../models/User'));
  });

  it('absolute path', function () {
    assert(!pathIsRelative('models/User'));
  });
});

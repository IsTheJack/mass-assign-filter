var assert = require('assert');
var massAssign = require('../mass-assign-filter.js');

describe('#mass-assign-test', function() {
  describe('#White List', function() {
    it('Object with one element and white list with this key', function() {
      var person = { name: "Roberto" };
      var expected = { name: "Roberto" };
      var whiteList = ['name'];

      assert.deepEqual(massAssign(person, whiteList), expected);
    });

    it('Object with many elements and white list with some keys', function() {
      var person = {
        name: "Roberto",
        email: "robertooliveira.dev@gmail.com",
        admin: true,
      };

      var expected = {
        name: "Roberto",
        email: "robertooliveira.dev@gmail.com",
      };

      var whiteList = ['name', 'email'];

      assert.deepEqual(massAssign(person, whiteList), expected);
    });
  });

  describe('#Black List', function() {
    it('Object with one element and black list with this key', function() {
      var person = { name: "Roberto" };
      var expected = {};
      var whiteList = ['name'];

      assert.deepEqual(massAssign(person, whiteList, false), expected);
    });

    it('Object with many elements and black list with some keys', function() {
      var person = {
        name: "Roberto",
        email: "robertooliveira.dev@gmail.com",
        admin: true,
      };

      var expected = {
        name: "Roberto",
        email: "robertooliveira.dev@gmail.com",
      };

      var whiteList = ['admin'];

      assert.deepEqual(massAssign(person, whiteList, false), expected);
    });
  });
});
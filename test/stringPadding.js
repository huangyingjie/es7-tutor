import {assert} from 'chai';
import StringPadding from '../src/stringPadding.js';

describe("class field", function () {
  var instance;
  before(function () {
    instance = new StringPadding();
  });
  describe("#class static field", function () {
    it("should have static field", function () {
      assert.equal(instance.padStart("foo", 2, "abcdefg"), "foo");
      assert.equal(instance.padStart("foo", 3, "abcdefg"), "foo");
      assert.equal(instance.padStart("foo", 4, "abcdefg"), "afoo");
    });
  });
});



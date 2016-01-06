import {assert} from 'chai';
import StringPadding from '../src/stringPadding.js';

describe("string padding", function () {
  var instance;
  before(function () {
    instance = new StringPadding();
  });
  describe("#test padStart", function () {
    it("pad Start", function () {
      assert.equal(instance.padStart("foo", 2, "abcdefg"), "foo");
      assert.equal(instance.padStart("foo", 3, "abcdefg"), "foo");
      assert.equal(instance.padStart("foo", 4, "abcdefg"), "afoo");
    });
  });
});



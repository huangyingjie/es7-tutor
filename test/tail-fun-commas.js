import {assert} from 'chai';

describe("tailling-function-commas", function () {
  describe("#tailling-function-commas", function () {
    it("should allow function params tails commas", function () {
      function test(a, b,) {
        return b;
      }
      assert.equal(test(1,2,), 2);
    });
  });
});

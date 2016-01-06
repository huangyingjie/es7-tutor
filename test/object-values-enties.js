import {assert} from 'chai';
import values from 'object.values';
import entries from 'object.entries';


describe("object-values-enties", function () {
  describe("#object-values", function () {
    it("should list values", function () {
      var obj = { a: 1, b: 2, c: 3 };
      assert.deepEqual(values(obj), [1,2,3]);
    });
  });
  describe("#object-enties", function () {
    it("should list entries", function () {
      var obj = { a: 1, b: 2, c: 3 };
      assert.deepEqual(entries(obj), [['a', 1], ['b', 2], ['c', 3]]);
    });
  });
});


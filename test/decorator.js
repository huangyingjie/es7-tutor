import {assert} from 'chai';
import {A, object as literal} from '../src/decorator.js';
// 测试ecma proposal: decorator
describe("decorators of class", function () {
  var instance, NAME = "Jim Green";
  before(function () {
    instance = new A(NAME);
  });
  describe("#class decorator", function () {
    it("should have attribute position on class", function () {
      assert.typeOf(A.position, 'object');
    });
  });
  describe("#accessor decorator", function () {
    it("name should be uppercase", function () {
      assert.equal(instance.name, NAME.toUpperCase());
    });
  });
  describe("#property decorator", function () {
    it("you can not see unenumerable property", function () {
      assert.equal(instance.propertyIsEnumerable('_cannotseeme'), false);
      // unEnumerable是hasOwnProperty的子集
      assert.equal(instance.hasOwnProperty('_cannotseeme'), false);
    });
  });
  describe("#Object Literal Method decorator", function () {
    it("you can not see unenumerable property", function () {
      assert.equal(instance.propertyIsEnumerable('_cannotseeme'), false);
      // unEnumerable是hasOwnProperty的子集
      assert.equal(instance.hasOwnProperty('_cannotseeme'), false);
    });
  });
});
describe("decorators of Object Literal", function () {
  it("params should to be lowercase", function () {
    assert.equal(literal.propertyIsEnumerable("concat"), false);
  });
});

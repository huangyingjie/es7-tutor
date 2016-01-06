import {assert} from 'chai';
import MyClass from '../src/classField.js';

describe("class field", function () {
  var instance;
  before(function () {
    instance = new MyClass();
  });
  describe("#class static field", function () {
    it("should have static field", function () {
      assert.equal(instance.name, 'MyClass');
      assert.equal(MyClass.name, 'MyClass');
    });
  });
});


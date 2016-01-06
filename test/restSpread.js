/*global describe, it, before*/
import restSpread from "../src/restSpread.js";
import {assert} from 'chai';

describe("restSpread", function () {
    var instance;
    before(function () {
        instance = new restSpread();
    });
    describe("#rest", function () {
        it("#should rest valid", function () {
            const result = instance.rest({x: 1, y:2, z: 3, m: 4, n: 5});
            assert.equal(result.x, 1);
            assert.equal(result.y.y, 2);
            assert.equal(result.y.z, 3);
        });
    });
    describe("#spread", function () {
        it("#should rest valid", function () {
            const result = instance.spread({x: 1, y:2, z: 3, m: 4, n: 5});
            assert.equal(result.x, 1);
            assert.equal(result.y, 2);
            assert.equal(result.z, 3);
        });
        it("#merge object", function () {
          const result = instance.mergeObject({x:1, y:2}, {x:3, z:5});
          assert.equal(result.x, 3);
          assert.equal(result.y, 2);
          assert.equal(result.z, 5);
        });
        it("#Overriding Properties", function () {
          let obj = {x: 2};
          let result = {...obj, x:1, y:2}
          assert.equal(result.x, 1);
          let x = 1, y = 2;
          result = {...obj, x, y};
          assert.equal(result.x, 1);
        });
    });
});

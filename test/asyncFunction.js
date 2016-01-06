import {assert} from 'chai';

describe("AsyncFunction", function () {
    describe("async setTimeout", function () {
      it("test async setTimeout", async function (cb) {
        // await必须接收Promise
        const result = await new Promise(resolve => resolve(123));
        try {
          assert.equal(result, 123);
          cb();
        } catch(e) {
          cb(e);
        }
      });
    });
});

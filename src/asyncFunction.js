export default class AsyncFunction {
  async asyncSetTimeout(value, ms, cb) {
    const result = await new Promise(resolve => setTimeout(function () {
      resolve(value);
    }, ms));
  }
};

export default class restSpread {
  rest (object) {
    let { x, ...y } = object;
    return {x, y};
  }
  spread (object) {
    let n = {...object};
    return n;
  }
  mergeObject (obj1, obj2) {
    return {...obj1, ...obj2}
  }
}

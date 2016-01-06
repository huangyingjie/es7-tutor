@position
class A {
  constructor(_name) {
    this._name = _name;
  }
  @toUpperCase
  get name() {
    return this._name;
  }
  @unenumerable
  _cannotseeme () {
  }
}

function unenumerable(target, key, descriptor) {
  descriptor.enumerable = false;
  return descriptor;
}
function toUpperCase(target, name, descripter) {
  descripter.get = function () {
    return this._name.toUpperCase();
  }
}
function position(target) {
  target.position = {};
}
const object = {

  @unenumerable
  concat: function (a, b) {
    return [a, b].join(",")
  }
};
export {A, object};

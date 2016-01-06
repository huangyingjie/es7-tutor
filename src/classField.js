export default class MyClass {
  //static name = "MyClass";
  // https://github.com/jeffmo/es-class-fields-and-static-properties
  // 与文档不符，写了static就报错:
  // TypeError: Cannot assign to read only property 'name' of function MyClass
  name = "MyClass";
};

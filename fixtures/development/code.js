function v({ p = 2, l } = {}) {
  __DEBUG("inside v");
  return false;
}

function a() {
  __DEBUG("inside a, first");
  let a = 1;
  __DEBUG("inside a, second");
  return a;
}

class A {
  w() {
    __DEBUG("inside A.w");
  }
  constructor() {
    __DEBUG("inside A.constructor, first");
    var a = "middle";
    __DEBUG("inside A.constructor, second");
  }
}

__DEBUG("before b assignment");
let b = () => {
  if (true) {
    return 2;
  } else {
    return 3;
  }
};

function c() {
  let a = 1;
  let b = 2;
  __DEBUG("inside c");
}

var fullName = function (firstName, lastName) {
  return `${firstName} ${lastName}`;
  __DEBUG("fullName");
};

const addAll = (x, y, z) => x + y + z;

function w() {
  return a();
}

__DEBUG("before calls");

a();
let aa = new A();
aa.w();
b();
c();
fullName("alpha", "beta");
addAll(1, 1, 1);

__DEBUG("the end");

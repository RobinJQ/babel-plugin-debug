"use strict";

function v({ p = 2, l } = {}) {
  console.log("\x1B[33m%s\x1B[0m", "[ DEBUG line: 2 file: code.js function: v ]", "inside v");
  return false;
}

function a() {
  console.log("\x1B[33m%s\x1B[0m", "[ DEBUG line: 7 file: code.js function: a ]", "inside a, first");
  let a = 1;
  console.log("\x1B[33m%s\x1B[0m", "[ DEBUG line: 9 file: code.js function: a ]", "inside a, second");
  return a;
}

class A {
  w() {
    console.log("\x1B[33m%s\x1B[0m", "[ DEBUG line: 15 file: code.js function: w ]", "inside A.w");
  }

  constructor() {
    console.log(
      "\x1B[33m%s\x1B[0m",
      "[ DEBUG line: 18 file: code.js function: constructor ]",
      "inside A.constructor, first"
    );
    var a = "middle";
    console.log(
      "\x1B[33m%s\x1B[0m",
      "[ DEBUG line: 20 file: code.js function: constructor ]",
      "inside A.constructor, second"
    );
  }
}

console.log(
  "\x1B[33m%s\x1B[0m",
  "[ DEBUG line: 24 file: code.js function: <NO NAME> ]",
  "before b assignment"
);

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
  console.log("\x1B[33m%s\x1B[0m", "[ DEBUG line: 36 file: code.js function: c ]", "inside c");
}

var fullName = function (firstName, lastName) {
  return `${firstName} ${lastName}`;
  console.log("\x1B[33m%s\x1B[0m", "[ DEBUG line: 41 file: code.js function: <NO NAME> ]", "fullName");
};

const addAll = (x, y, z) => x + y + z;

function w() {
  return a();
}

console.log("\x1B[33m%s\x1B[0m", "[ DEBUG line: 50 file: code.js function: <NO NAME> ]", "before calls");
a();
let aa = new A();
aa.w();
b();
c();
fullName("alpha", "beta");
addAll(1, 1, 1);
console.log("\x1B[33m%s\x1B[0m", "[ DEBUG line: 60 file: code.js function: <NO NAME> ]", "the end");

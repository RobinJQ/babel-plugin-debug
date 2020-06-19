# babel-plugin-debug

Plugin that transforms __DEBUG(\<MESSAGE\>) to console.log(\"[ DEBUG line:\", \<LINE\>, \"file:\", \<FILE\> \", \"function:\", \<FUCNTION\>, \" ]\", \<MESSAGE\>)

## Usage

```javascript
{
  loader: 'babel-loader',
  options: {
    plugins: [['babel-plugin-debug', {'production': false}]]
  }
}
```

To disable debugging and remove all __DEBUG, set production to true.

## Example

Input:

```javascript
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
```

Output:

```javascript
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
```

Console output:

```bash
[ DEBUG line: 24 file: code.js function: <NO NAME> ] before b assignment
[ DEBUG line: 50 file: code.js function: <NO NAME> ] before calls
[ DEBUG line: 7 file: code.js function: a ] inside a, first
[ DEBUG line: 9 file: code.js function: a ] inside a, second
[ DEBUG line: 18 file: code.js function: constructor ] inside A.constructor, first
[ DEBUG line: 20 file: code.js function: constructor ] inside A.constructor, second
[ DEBUG line: 15 file: code.js function: w ] inside A.w
[ DEBUG line: 36 file: code.js function: c ] inside c
[ DEBUG line: 60 file: code.js function: <NO NAME> ] the end
```

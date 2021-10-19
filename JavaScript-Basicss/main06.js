'use strict';

const x = 2; //グローバル変数！

function f() {
  const x = 1;
  console.log(x);
}

f();
console.log(x);
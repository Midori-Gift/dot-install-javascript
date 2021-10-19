'use strict';

// const sum = function(a, b, c) {
//   console.log(a + b + c);
//   return a + b + c;
// };

// 下はアロー関数という、上のコメントアウトと同義となる

const sum = (a, b, c) => a + b + c;

const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);

const double = a => a * 2;
console.log(double(12));
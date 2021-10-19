'use strict';

{
  const point = {
    x:100,
    y:180
  };

console.log(point.x);
console.log(point['y']);

point.z = 90;
delete point.y;
console.log(point);
}
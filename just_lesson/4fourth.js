"use strict";

let x = 5;

console.log(++x);

let z = [] + false - null + true;

console.log(z);

let a = 1;
let b = (a = 2);
console.log(b);

let c = [] + 1 + 2;
console.log(typeof c);

let g = "1" + [0];
console.log(g);

let k = 2 && 1 && null && 0 && undefined;
console.log(k);

let p = null || (2 && 3) || 4;
console.log(p);
// И запинается на лжи
// ИЛИ запинается на правде

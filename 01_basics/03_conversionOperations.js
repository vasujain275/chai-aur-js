// Datatype Conversion Operations in JavaScript

// String to Number
let val;
val = '5';
val = Number(val);
console.log(typeof val);
// '5' >> 5
// '5abc' >> NaN
// null >> 0
// true >> 1
// false >> 0

// Conversion to Boolean
let isLoggedin = 0;
isLoggedin = Boolean(isLoggedin);
console.log(isLoggedin);
// 0 >> false
// 1 >> true
// null >> false
// undefined >> false
// '' >> false
// 'abc' >> true
// 0n >> false
// 123n >> true
// [] >> false



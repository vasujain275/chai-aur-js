// ++++++++++++Numbers++++++++++++

// Declaration
const num = 10;
console.log(num)
const num2 = new Number(10);
console.log(num2)

// Some Methods

// 1. toString()
console.log(num.toString()) // '10'

// 2. toFixed()
console.log(num.toFixed(2)) // '10.00'

// 3. toPrecision()
console.log(num.toPrecision(2)) // '10'

// 4. valueOf()
console.log(num.valueOf()) // 10

// 5. toExponential()
console.log(num.toExponential()) // '1e+1'

// ++++++++++++Maths++++++++++++++
/*
It is a built-in object that has properties and methods for mathematical constants and functions.
    - It is not a function object.
    - It does not have a constructor.
    - It is static.
*/

// Some Properties & Methods

// 1. Math.PI
console.log(Math.PI) // 3.141592653589793

// 2. Math.E
console.log(Math.E) // 2.718281828459045

// 3. Math.round()
console.log(Math.round(2.4)) // 2

// 4. Math.ceil()
console.log(Math.ceil(2.4)) // 3

// 5. Math.floor()
console.log(Math.floor(2.4)) // 2

// 6. Math.sqrt()
console.log(Math.sqrt(16)) // 4

// 7. Math.random()
console.log(Math.random()) // 0.123456789

// Trick to get random number between some range
const min = 1;
const max = 10;
console.log(Math.floor(Math.random() * (max - min + 1) + min)) // Important Trick
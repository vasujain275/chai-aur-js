// Truthy and Falsy values
// Falsy values: undefined, null, 0, '', NaN, false, 0, -0, 0n
// Truthy values: NOT falsy values


// Nullish coalescing operator (??) : null and undefined

let userColor1 = 'red';
let defaultColor = 'blue';

let currentColor1 = userColor1 || defaultColor;
console.log(currentColor1);

// if userColor is undefined, null, or empty string, then defaultColor will be assigned to currentColor

// Nullish coalescing operator (??) : null and undefined

let userColor2 = undefined;

let currentColor2 = userColor2 ?? defaultColor;

console.log(currentColor2);

// if userColor is undefined or null, then defaultColor will be assigned to currentColor

// Turnery if else operator

let points = 110; 
let type = points > 100 ? 'gold' : 'silver';
console.log(type);


// Map method on Arrays
// Map method is used to iterate over an array and return a new array with the same number of items as the original array.
// It is used to transform the items in the array.
// It can return values.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNumbers.map((num) => num + 10);

// console.log(newNums);

// Chaining Methods on Arrays

newNums = myNumbers.map((num) => num + 10).filter((num) => num > 15);

console.log(newNums);

// Diffrence between Filter vs Map
// Filter returns an array of items that pass the condition inside the callback function.
// Map returns an array of items that are modified by the callback function.
// Filter does not modify the original array.
// Map modifies the original array.
// Filter does not return values.
// Map can return values.
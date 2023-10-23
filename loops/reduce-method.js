// Reduce method on Arrays
// Reduce method is used to iterate over an array and return a single value.
// It is used to reduce the items in the array to a single value.
// It can return values.

const myNumbers = [1, 2, 3, 4, 5];

const myTotal = myNumbers.reduce( (acc, curval) => acc + curval, 0);

console.log(myTotal);
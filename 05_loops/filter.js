// Filter method is used to filter out the elements of an array based on a condition.
// It returns a new array with the elements that pass the condition inside the provided function.

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let filterNums = mynums.filter( (num) =>  num>5 );

console.log(filterNums);
// String is not an array of characters rather it is a object with String class


// String Concatenation
let firstName = 'John';
let lastName = 'Doe';
let age = 30;
let str;

// Old Way & Not Recommended
str = 'Hello, my name is ' + firstName + ' ' + lastName + ' and I am ' + age;
console.log(str);

// New Way & Recommended (String Interpolation)
str = `Hello, my name is ${firstName} ${lastName} and I am ${age}`;
console.log(str);



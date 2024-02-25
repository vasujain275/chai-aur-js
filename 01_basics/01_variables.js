/*
Variables - var, let, const
var - scope is global
let, const - scope is block level
Never use var anymore as it is not block scoped
*/

// 1. const 
const username = 'John';
// name = 'Smith'; // TypeError: Assignment to constant variable.

// 2. let - scope is block level
let age = 30;
age = 31;


// 3. var - scope is global
var city = 'New York';
city = 'Boston';

// Not recommended but we can declare a variable without using any keyword
country = 'US';

console.log(username, age, city, country);

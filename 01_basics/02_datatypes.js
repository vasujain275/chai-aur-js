/*
Datatypes in JavaScript
    Primitive Datatypes - 
        1. Number - it is a floating point number
        2. String - sequence of characters
        3. Boolean - true or false
        4. Undefined - variable that has not been assigned a value
        5. Null - non-existent
        6. Symbol - unique identifiers
        7. BigInt - large integers
    Reference Datatypes -
        1. Arrays - list of values
        2. Object Literals - key value pairs
        3. Functions - block of code
        4. Dates - represents date and time
*/


// Primitive Datatypes
// 1. Number
const age = 30;
console.log(typeof age);

// 2. String
const name = 'John';
console.log(typeof name);

// 3. Boolean
const hasKids = true;
console.log(typeof hasKids);

// 4. Undefined
let test;
console.log(typeof test);

// 5. Null
const car = null;
console.log(typeof car);

// 6. Symbol
const sym = Symbol();
console.log(typeof sym);

// 7. BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber);


// Reference Datatypes
// 1. Arrays
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

// 2. Object Literals
const address = {
    city: 'Boston',
    state: 'MA'
}
console.log(typeof address);

// 3. Functions
function addNums(num1, num2) {
    return num1 + num2;
}
console.log(typeof addNums);

// 4. Dates
const today = new Date();
console.log(today);
console.log(typeof today);



/*
Stack (Primitive Datatypes) , Heap(Reference Datatypes)
    Primitive Datatypes
        - stored in Stack
        - accessed by value
    Reference Datatypes
        - stored in Heap
        - accessed by reference to a location in memory
*/


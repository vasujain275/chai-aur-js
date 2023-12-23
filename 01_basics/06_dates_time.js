/*
Dates 
    - Date is a built-in object in JavaScript.
    - It is used to work with dates and times.
    - It is static.
    - It does not have a constructor.
    - It does not have any prototype.
*/

// Declaration
const today = new Date();
console.log(today);

const speficDate = new Date('12-12-2020');
console.log(speficDate.toDateString());

// Some Methods

// 1. getFullYear()
console.log(today.getFullYear()) // 2021

// 2. getMonth()
console.log(today.getMonth()) // 1

// 3. getDate()
console.log(today.getDate()) // 18

// 4. getDay()
console.log(today.getDay()) // 4

// 5. getHours()
console.log(today.getHours()) // 21

// 6. toString()
console.log(today.toString()) // Thu Feb 18 2021 21:17:01 GMT+0530 (India Standard Time)

// 7. toDateString()
console.log(today.toDateString()) // Thu Feb 18 2021

// 8. toLocaleDateString()
console.log(today.toLocaleDateString()) // 2/18/2021

// 9. toLocaleTimeString()
console.log(today.toLocaleTimeString()) // 9:18:21 PM 

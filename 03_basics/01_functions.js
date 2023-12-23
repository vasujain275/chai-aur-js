// Function Declaration
const addTwoNumbers = (a, b) => {
    return a + b;
}
console.log(addTwoNumbers(1, 2));

// Passing default values to function parameters
function loginUserMsg(username = `Vasu`) {
    return `${username} just logged in`;
}
console.log(loginUserMsg('Vasu'));


// Arrow functions
const addTwoNumbersArrow = (a, b) => {
    return a + b;
}
console.log(addTwoNumbersArrow(1, 2));

// Arrrow Functions without return keyword and curly braces
const addTwoNumbersArrowDirect = (a, b) => a + b;
console.log(addTwoNumbersArrowDirect(1, 2));

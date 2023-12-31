/*
Immediately Invoked Function Expression (IIFE)
    - It is a function that is executed right after it is created.
    - It has no name and is not stored in a variable.
    - It is a common pattern for creating local scopes.
    - It is used to avoid polluting the global environment and to create closures.
*/

// Named IIFE
(function chai() {
    console.log("I am a function");
})();

// Anonymous IIFE
( (name) => {
    console.log("I am a function too " + name);
})("chai");


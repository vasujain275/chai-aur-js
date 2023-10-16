// Immediately Invoked Function Expression (IIFE)
// IIFE is a function that is executed right after it is created.
// It has no name and is not stored in a variable.
// IIFE is a common pattern for creating local scopes.
// It is used to avoid polluting the global environment and to create closures.


(function chai() {
    console.log("I am a function");
})();

( () => {
    console.log("I am a function too");
})();


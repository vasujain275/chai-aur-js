// For in loop in JavaScript
// It is used to iterate over the keys of an object.
// for-in loops cannot be used with maps and sets.  
// for-in loop is not recommended to use with arrays and strings.

const myObject = {
    js: 'JavaScript',
    py: 'Python',
    cpp: 'C++',
    rb: 'Ruby'
};

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

// for in loop on arrays (not recommended)

const arr = ["a", "b", "c", "d", "e"];

for (const key in arr) {
    console.log(key);
}
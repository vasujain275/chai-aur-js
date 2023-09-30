// IMPORTANT:
// Symbols in Objects

const mySym = Symbol('key1')


// Object Literals
const JsUser = {
    name: 'Vasu',
    age: 18,
    [mySym]: "key2",
    location: 'India',
    email: 'vasujain@google.com',
    isLoggedin: true,
    lastloginDays: [
        'Monday',
        'Tuesday'
    ]
}

// console.log(JsUser);
// console.log(JsUser["name"]);
// console.log(typeof JsUser[mySym]);


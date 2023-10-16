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

JsUser.greetings = () => {
    console.log("Hello User!");
}

JsUser.greetings2 = function () {
    console.log(`Hello ${this.name}!`);
}

// JsUser.greetings();
// JsUser.greetings2();

const obj1 = { 1: 'a', 2: 'b', 3: 'c' };
const obj2 = { 1: 'd', 2: 'e', 3: 'f' };

const obj3 = { ...obj1, ...obj2, 4: 'g' }
// console.log(obj3);

console.log(JsUser?.name);


const Course = {
    courseName: 'Chai aur JS',
    price: 999,
    courseInstructor: 'Hitesh Choudhary'
}

const { courseName, price, courseInstructor } = Course; // Destructring Objects

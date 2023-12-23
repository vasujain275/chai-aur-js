// Control Flow - if/else statements

// if in one line
// Bad practice
// if (true) console.log("This is true"), console.log("This is also true");

// Nested if/else statements

const age = 18;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

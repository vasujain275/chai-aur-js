// Inheritance In JS

// Example Question - 
// Define a Person class with properties name and age.
// Then create a Student class that extends Person and adds a property grade.

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}


class Student extends Person {
	constructor(name, age, grade, section) {
		super(name, age);
		this.grade = grade;
		this.section = section;
	}
}

const person1 = new Person("VJ", 19);
const student1 = new Student("CJ", 91, 11, "B");


console.table([person1, student1])

// Leagcy way of doing things
const Teacher = {
	makeVideo: true
}

const User = {
	name: 'bugsmastervj',
	email: 'me@bugsmastervj'
}


const TeachingSupport = {
	isAvailable: false
}

const TASupport = {
	makeAssignment: 'JS Assigment',
	fullTime: true,
	__proto__: TeachingSupport  // Inherited the methods of TeachingSupport Object/Class
}

Teacher.__proto__ = User // Teacher will inherit the methods of User

// Morden Syntax 

Object.setPrototypeOf(TeachingSupport, Teacher); // TeachingSupport will inherit the properties of Teacher

function multiplyby5(num){
	return num*5;
}

multiplyby5.power = 2;

console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createUser(username,price){
	this.username = username;
	this.price=price;
}

createUser.prototype.increment = function(){
	this.price++;
}

createUser.prototype.printMe= function(){
	console.log(`price is ${this.price}`);
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",25)

chai.printMe();

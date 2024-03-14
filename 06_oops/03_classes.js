// Morden Way of Implementing Classes
class User {
	constructor(username, email, password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}
	encry() {
		this.password = `${this.password}12345acb`
	}
}

const user1 = new User("vasu", "me@vasujain.me", "very$ECuR#");

console.table(user1);



// Old Way of Implementing Classes and its methods
function Drink(name, origin, price) {
	this.name = name;
	this.origin = origin;
	this.price = price;
}

Drink.prototype.addRecipe = function(recipe) {
	this.recipe = recipe;
}

const tea = new Drink("Tea", "India", 10);
tea.addRecipe("Add milk + sugar + water + tea leaves and boil till browish colour");

console.table(tea)

function Person(){
}

Person.prototype.name = "Bob";
Person.prototype.age = 25;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    console.log(this.name);
};

var person1 = new Person();
person1.sayName();

var person2 = new Person();
person2.sayName();

console.log(person1.sayName == person2.sayName);

var person3 = new Person();
person3.name = "Charlie"
person3.sayName();

console.log(person2.sayName == person3.sayName);

delete person3.name;
person3.sayName();

Person.prototype.sayHi = function(){
    console.log("Hi" + this.name);
}
person1.sayHi();
person2.sayHi();
person3.sayHi();

function Person(){

}

Person.prototype = {
    constructor: Person,
    name: "Bob",
    age: 25,
    Job: "Software Engineer",
    sayName: function(){
        console.log(this.name);
    }
}

var Person1 = new Person();
person1.sayName();

function Person( ){
}

var person1 = new Person( );

Person.prototype = {
	constructor: Person,
	name: "Bob",
	age: 25,
	Job: "Software Engineer",
	sayName: function ( ) {
		console.log(this.name);
	}
};

person1.sayName( ); // error

function Person( ){
}

Person.prototype = {
	constructor: Person,
	name: "Bob",
	age: 25,
	job: "Software Engineer",
	friends: ["Charlie", "Dave"],
	sayName: function( ){
		console.log(this.name);
	}
};


var person1 = new Person( );
var person2 = new Person( );

console.log(person1.friends); // Charlie, Dave
console.log(person2.friends); // Charlie, Dave

person1.friends.push("Ed");

console.log(person1.friends); // Charlie, Dave, Ed
console.log(person2.friends); // Charlie, Dave, Ed

console.log(person1.friends == person2.friends); // true
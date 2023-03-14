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
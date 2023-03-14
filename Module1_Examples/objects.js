// Object Constructor 
var person = new Object();
person.name = "Bob";
person.age = 25;
person.job = "Software Engineer";
person.sayName = function(){
	console.log(this.name)
};

person.sayName();

// Object Literal
var employee = {
    name: "Bob",
    age: 25,
    job: "Software Engineer",
    sayName: function(){
        console.log(this.name);
    }
};

employee.sayName();
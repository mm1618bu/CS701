function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Ed","Fred"];
}

Person.prototype = {
    constructor: Person,
    sayName: function(){
        console.log(this.name);
    }
};

var person1 = new Person("bob", 25, "Software Engineer");
var person2 = new Person("Charlie", 30, "Architect");

person1.friends.push("Dave");

console.log(person1.friends);
console.log(person2.friends);

console.log(person1.friends === person2.friends);
console.log(person1.sayName === person2.sayName);
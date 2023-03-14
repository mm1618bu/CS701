function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    };
}

var person1 = new Person("Bob", 25, "Software Engineer");
var person2 = new Person("Charlie", 30, "Architect");

person1.sayName(); // Bob
person2.sayName(); // Charlie

console.log(person1 instanceof Object); // true
console.log(person1 instanceof Person); // true

console.log(person2 instanceof Object); // true
console.log(person2 instanceof Person); // true

console.log(person1.constructor == Person); // true
console.log(person2.constructor == Person); // true

console.log(person1.sayName);
console.log(person2.sayName);
console.log(person1.sayName == person2.sayName); // false

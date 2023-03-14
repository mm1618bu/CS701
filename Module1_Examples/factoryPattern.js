function createPerson(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        console.log(this.name);
    };
    return o;
}

var person1 = createPerson("Bob", 25, "Software Engineer");
var person2 = createPerson("Charlie",30,"Architect");

person1.sayName();
person2.sayName();

console.log(typeof person1);
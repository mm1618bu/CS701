var person = new Object();

// Defining one name on the person object

Object.defineProperty(person, "name",{
    writable: false,
    configurable: true,
    value:"Bob"
});

// Since Writable is set to FALSE, changing the name will not do anything. If configurable is TRUE, we may be able to delete the property.

console.log(person.name);
person.name = "Charlie";
console.log(person.name);

delete person.name;
console.log(person.name);

// Enumerable controls if included in the for in loop when enumerating.

var person = {};
Object.defineProperty(person,"name",{
    enumerable: true,
    value: "Bob"
});

Object.defineProperty(person,"age",{
    enumerable: true,
    value: "25"
});

Object.defineProperty(person,"job",{
    enumerable: true,
    value: "Software Engineer"
});

for(var prop in person){
    console.log(prop,".",person[prop]);
}
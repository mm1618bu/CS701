var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.print = function () {
        return "Person: ".concat(this.name, " [").concat(this.id, "]");
    };
    return Person;
}());
var p1 = new Person();
console.log(p1.print());
p1.name = "Alice";
p1.id = "123-45-1000";
console.log(p1.print());

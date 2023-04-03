var Person = /** @class */ (function () {
    function Person(name, id) {
        this.name = name;
        this.id = id;
    }
    Person.prototype.print = function () {
        return "Person: ".concat(this.name, " [").concat(this.id, "]");
    };
    Person.prototype.greet = function (msg) {
        if (msg === void 0) { msg = 'Hello '; }
        return "".concat(msg, " ").concat(this.name, " [").concat(this.id, "]");
    };
    return Person;
}());
var p1 = new Person("Alice", "123-45-1000");
console.log(p1.print());
console.log(p1.greet());
console.log(p1.greet('Welcome'));

var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newValue) {
            if (newValue && newValue.length > 1) {
                this._name = newValue;
            }
            else {
                this.name = undefined;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (newValue) {
            if (newValue && newValue.match(/(\d){3}-(\d){2}-(\d){4}/)) {
                this._id = newValue;
            }
            else {
                this._id = undefined;
            }
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.print = function () {
        return "Person: ".concat(this.name, " [").concat(this.id, "]");
    };
    return Person;
}());
var p1 = new Person();
p1.name = "Alice";
p1.id = "123451000";
console.log(p1.print());
p1.name = "A";
p1.id = "123-45-1000";
console.log(p1.print());
p1.name = "Alice";
console.log(p1.print());

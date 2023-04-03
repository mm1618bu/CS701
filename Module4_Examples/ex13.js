var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, id) {
        this.name = name;
        this.id = id;
    }
    Person.prototype.print = function () {
        return "Person: ".concat(this.name, " [").concat(this.id, "]");
    };
    Person.prototype.greet = function (msg) {
        if (msg === void 0) { msg = 'Hello'; }
        return "".concat(msg, " ").concat(this.name, " [").concat(this.id, "]");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.print = function () {
        var s = _super.prototype.print.call(this);
        return "Student ".concat(s, " : Program: ").concat(this.program);
    };
    return Student;
}(Person));
var s1 = new Student("Alice", "123-45-1000");
console.log(s1.print());

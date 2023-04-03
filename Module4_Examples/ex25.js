var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.numberOfDimensions = 2;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.displayShape = function () {
        var result = "A ".concat(this.numberOfDimensions, "D Shape with area ").concat(this.area());
        return result;
    };
    return Rectangle;
}());
var r = new Rectangle(10, 20);
console.log(r);
console.log(r.displayShape());
var Cuboid = /** @class */ (function () {
    function Cuboid(length, width, height) {
        this.numberOfDimensions = 3;
        this.length = length;
        this.width = width;
        this.height = height;
    }
    Cuboid.prototype.area = function () {
        return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
    };
    Cuboid.prototype.volume = function () {
        return this.length * this.width * this.height;
    };
    Cuboid.prototype.displayShape = function () {
        var result = "A ".concat(this.numberOfDimensions, "D Shape with Surface Area ").concat(this.area(), " and Volume ").concat(this.volume(), "}");
        return result;
    };
    return Cuboid;
}());
var c = new Cuboid(10, 20, 5);
console.log(c);
console.log(c.displayShape());

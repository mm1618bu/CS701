function displayCourse(course) {
    var result = "".concat(course.id, " -- ").concat(course.name);
    return result;
}
var x = { id: 'cs701', name: "RIA Development" };
console.log(displayCourse(x));
x.name = "Rich Internet Application Development";
console.log(displayCourse(x));
x.id = 'cs999';
console.log(displayCourse(x));

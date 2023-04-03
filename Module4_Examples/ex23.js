function displayCourse(course) {
    var result = course.name;
    if (course.id) {
        result = "".concat(course.id, " -- ").concat(course.name);
    }
    return result;
}
var x = { id: 'cs701', name: "RIA Development" };
console.log(displayCourse(x));
var y = { name: "RIA Development" };
console.log(displayCourse(y));

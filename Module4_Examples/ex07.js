var Degree;
(function (Degree) {
    Degree[Degree["CS"] = 0] = "CS";
    Degree[Degree["CIS"] = 1] = "CIS";
    Degree[Degree["DA"] = 2] = "DA";
    Degree[Degree["SD"] = 3] = "SD";
})(Degree || (Degree = {}));
;
var x = Degree.CS;
console.log(x);
var degreeName = Degree[1];
console.log(degreeName);

var Degree;
(function (Degree) {
    Degree[Degree["CS"] = 10] = "CS";
    Degree[Degree["CIS"] = 20] = "CIS";
    Degree[Degree["DA"] = 21] = "DA";
    Degree[Degree["SD"] = 30] = "SD";
})(Degree || (Degree = {}));
;
var x = Degree.CIS;
console.log(x);
x = Degree.DA;
console.log(x);
var degreeName = Degree[30];
console.log(degreeName);

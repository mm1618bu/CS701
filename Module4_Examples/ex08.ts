enum Degree {CS = 10, CIS = 20, DA, SD = 30};

let x: Degree = Degree.CIS;
console.log(x);

x = Degree.DA;
console.log(x);

let degreeName: string = Degree[30];
console.log(degreeName);
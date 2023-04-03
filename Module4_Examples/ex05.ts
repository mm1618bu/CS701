let p: [string, string, number];
p = ["john","doe", 25];

console.log("p = ",p);

let x: string = `I am ${p[0]} ${p[1]}. I will be ${p[2] + 1} next year.`

console.log("x =", x);
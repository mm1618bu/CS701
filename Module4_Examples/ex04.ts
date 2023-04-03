let x: number[] = [10,20,30];
let y: Array<number> = [10,20,30];

console.log("x = ", x);
console.log("y = ", y);

let z: Array<string> = ["a"];
z.push("b");
z.push("c","d");

console.log("z = ", z);
console.log("z.length", z.length);

z[4] = "e";
console.log("z =", z);
console.log("z.length =", z.length);

z[25] = "z";
console.log("z =", z);
console.log("z.length =", z.length);

console.log("z[20] = ", z[20]);
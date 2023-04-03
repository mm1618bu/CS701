import * as MyMath from './ex31_math';

let x: number = MyMath.square(7);
console.log("x = ", x);

let dice1: number = MyMath.random(1,6);
let dice2: number = MyMath.random(1,6);

console.log(`dice1: ${dice1}, dice2: ${dice2}`);

console.log("PI = ", MyMath.PI);
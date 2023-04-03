import { square, PI } from './ex31_math';
import { random } from './ex31_math';

let x: number = square(7);
console.log("x = ",x);

let dice1: number = random(1,6);
let dice2: number = random(1,6);

console.log(`dice1: ${dice1}, dice2: ${dice2}`);

console.log("PI = ", PI);
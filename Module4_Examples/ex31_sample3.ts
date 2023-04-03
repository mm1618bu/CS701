import {square as MySquare, PI} from './ex31_math';
import { random as MyRandom } from './ex31_math';

let x: number = MySquare(7);
console.log("x = ", x);


let dice1: number = MyRandom(1,6);
let dice2: number = MyRandom(1,6);

console.log(`dice1: ${dice1}, dice2: ${dice2}`);

console.log("PI = ", PI);
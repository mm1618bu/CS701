"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ex31_math_1 = require("./ex31_math");
var ex31_math_2 = require("./ex31_math");
var x = (0, ex31_math_1.square)(7);
console.log("x = ", x);
var dice1 = (0, ex31_math_2.random)(1, 6);
var dice2 = (0, ex31_math_2.random)(1, 6);
console.log("dice1: ".concat(dice1, ", dice2: ").concat(dice2));
console.log("PI = ", ex31_math_1.PI);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyMath = require("./ex31_math");
var x = MyMath.square(7);
console.log("x = ", x);
var dice1 = MyMath.random(1, 6);
var dice2 = MyMath.random(1, 6);
console.log("dice1: ".concat(dice1, ", dice2: ").concat(dice2));
console.log("PI = ", MyMath.PI);

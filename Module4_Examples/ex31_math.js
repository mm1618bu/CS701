"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.E = exports.PI = exports.random = exports.cube = exports.square = void 0;
function square(x) {
    return Math.pow(x, 2);
}
exports.square = square;
;
function cube(x) {
    return Math.pow(x, 3);
}
exports.cube = cube;
;
function random(a, b) {
    var min = Math.ceil(a);
    var max = Math.floor(b);
    return min + Math.floor(Math.random() * (max - min));
}
exports.random = random;
exports.PI = Math.PI;
exports.E = Math.E;

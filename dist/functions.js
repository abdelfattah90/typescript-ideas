"use strict";
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function printHello() {
    console.log('Ahmed!');
}
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 5));
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(2, 5));
function pow(value, exponent = 10) {
    return value ** exponent;
}
console.log(pow(10));
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
function addNum(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(addNum(10, 10, 10, 10, 10));
const negateFunction = (value) => value * -1;
console.log(negateFunction(10));
//# sourceMappingURL=functions.js.map
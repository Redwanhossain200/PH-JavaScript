// Function Declaration
function add(num1, num2) {
  return num1 + num2;
}
// console.log(add(10, 20));

// Function Expression
const add2 = function (num1, num2) {
  return num1 + num2;
}
console.log(add2(50, 100));

// Arrow function 
const add3 = (num1, num2) => num1 + num2;
console.log(add3(50, 100));

const multiple = (a, b) => a * b;
console.log(multiple(20, 20));

const tentimes = x => x * 10;
console.log(tentimes(10));

const tentimes2 = (x) => x * 10;
console.log(tentimes2(20));

const getPi = (x) => x * 3.1416;
console.log(getPi(20));

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
console.log(addAll(10, 20, 30, 40, 50, 60));

const isEven = x => x % 2 === 0;
console.log(isEven(25));

const divide = (a, b) => a / b;
console.log(divide(20, 10));

const sub = (c, d) => c - d;
console.log(sub(30, 15));

const doMath = (x, y) => {
  const sum = x + y;
  return sum;
}
console.log(doMath(10, 20));
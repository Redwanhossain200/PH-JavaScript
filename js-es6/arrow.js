// Function Declaration
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(10, 20));

// Function Expression
const add2 = function (num1, num2) {
  return num1 + num2;
}
console.log(add2(50, 100));

// Arrow function 
const add3 = (num1, num2) => num1 + num2;
console.log(add3(50, 100));
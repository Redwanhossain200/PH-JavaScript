function add(num1, num2) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}

// NaN --> not a number
// add(10);


function add2(num1, num2 = 0) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}
add2(10, 60);

function fullName(firstName, lastName) {
  const name = firstName + ' ' + lastName;
  console.log(name);
}
fullName('Redwan', 'Hossain');

function multiply(num1, num2 = 0) {
  const result = num1 * num2;
  console.log(num1, num2, result);
}
multiply(10);
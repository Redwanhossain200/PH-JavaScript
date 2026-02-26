const max = Math.max(10, 2, 32, 14, 50, 46, 77, 68, 9, 10);
// console.log(max);

const numbers = [10, 2, 32, 14, 50, 46, 77, 68, 9, 10];
const max2 = Math.max(...numbers);
// console.log(max2);

const params = [45, 12, 3];
function sum(x, y, z) {
  console.log(x, y, z);
  return x + y + z;
}
const result = sum(...params);
console.log(result);

// const arr1 = [1, 2, 3]
// const arr2 = arr1;
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);
const arr1 = [1, 2, 3]
const arr2 = [...arr1];
arr2.push(4);
console.log(arr1);
console.log(arr2);
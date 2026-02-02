const jim = 56;
const tim = 89;
const kim = 68;

if (jim > tim && jim > kim) {
  console.log('Jim is the ultimate boss');
} else if (tim > jim && tim > kim) {
  console.log('Tim is the ultimate boss');
} else {
  console.log('Kim is the ultimate boss');
}

const max = Math.max(12, 11, 56, 35, 56, 78, 83, 18);
console.log('max issuing Math.max', max);
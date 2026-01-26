let age = 20;
let hasNID = false;

if (age>=18 && hasNID==true) {
  console.log('You are eligible');
} else {
  console.log('You are not eligible');
}


let price = 11000;

if (price >= 8000 && price <= 11999) {
 // 70% discount
  const discount = price * 70 / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else if (price >= 5000 && price <= 7999) {
  // 50% discount
  const discount = price * 50 / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else if (price >= 3000 && price <= 4999) {
  // 30% discount
  const discount = price * 30 / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else if (price>=1500 && price <= 2999) {
  // 10% discount
  const discount = price * 10 / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}
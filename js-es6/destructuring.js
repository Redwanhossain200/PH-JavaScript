// const product = {
//   name: 'Iphone',
//   price: 799,
//   description: ' A smartphone by apple'
// };

// const newPrice = product.price + 100;
// // console.log(newPrice);
// const phoneName = `this is an ${product.name}`;
// // console.log(phoneName);

// const price = product.price;
// const name = product.name;

const price = 5555;
// const name = 'Samsung';
// const product = { name: 'Iphone', price: '799', brand: 'Apple' };
const { name, price: phonePrice, camera = '12 MP' } = { name: 'Iphone', price: '799', brand: 'Apple' };
console.log(camera);
const school = 'RAJUK UTTARA MODEL COLLEGE';
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = 'Chemistry';
const book = 'ChemIstry';

if (subject.toLowerCase() === book.toUpperCase()) {
  console.log('I am reading book aibar agun dhorbe');
} else {
  console.log('Hudai pg ultamu')
}

const drink = ' Water';
const liquid = ' Water';

if (drink.trim() === liquid.trim()) {
  console.log('panir opor nam jibon');
} else {
  console.log('Ocean waterrr kaite partam nah');  
}
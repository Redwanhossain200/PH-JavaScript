// console.log('document object model');

const student = {
  name: 'abul mia',
  id: 123,
  study: function (subject) {
    // console.log('studying subject:', subject);
  }
}


// document.getElementsByTagName
const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for (const li of liCollection) {
  // console.log(li.innerText);
}

// All h1 Tags 
const allHeading = document.getElementsByTagName('h1');
for (const heading of allHeading) {
  // console.log(heading.innerText);
}

// get by ID 
const foodTitleH1 = document.getElementById('food-title');
// console.log(foodTitleH1.innerText);
// console.log(foodTitleH1.innerText = 'food makes me healthy');

// Get element by class name
const foriegnFood = document.getElementsByClassName('foriegn');
// console.log(foriegnFood.innerText);

for (const element of foriegnFood) {
  // console.log(element.innerText);
}

// query selector all 
const spanElements = document.querySelectorAll('#old-dhaka p span');
for (const span of spanElements) {
  // console.log(span.innerText);
}

// Styling with javascript 
const foodElement = document.getElementById('food-title');
// console.log(foodElement.innerText = 'Food forever');

// Dynamic style, getAttribute, setAttribute, innerText, innerHTML

// foodElement.style.backgroundColor = 'black';
// foodElement.style.color = 'white';
// foodElement.style.borderRadius = '20px';
// foodElement.style.padding = '15px';
// foodElement.style.textAlign = 'center';
// foodElement.style.textTransform = 'uppercase';
// foodElement.style.listStyle = 'none';
// foodElement.style.margin = '0';
// foodElement.classList.add('bg-red');
// foodElement.classList.add('big');
// foodElement.classList.add('bold');
// foodElement.classList.remove('bg-red');
// foodElement.getAttribute('id');
// foodElement.setAttribute('title', 'title or js tooltip');
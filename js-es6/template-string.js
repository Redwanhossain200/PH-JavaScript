const firstName = 'Redwan';
const lastName = 'hossain';

// const aboutMe = 'assndlkjasj';

const aboutMe = `My name is ${firstName} ${lastName}`;
const giveMe = `Give me money ${(20 + 30) * 2 + 500} `;
console.log(aboutMe);
console.log(giveMe);

function getCardHTML(name, description, price) {
  const div = `
  <div class="card">
    <h2>${name.toUpperCase()} RichKid</h2>
    <p>Price: $${price}</p>
    <p>${description}</p>
  </div>`;

  console.log(div);
}

getCardHTML('Iphone 12', 'This is the latest iPhone model', 999);
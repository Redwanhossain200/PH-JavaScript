// const sections = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section');
// console.log(sections);
// for (const section of sections) {
//   console.log(section);
//   section.style.backgroundColor = 'teal';
//   section.style.color = 'white';
//   section.style.marginBottom = '10px';
//   section.style.padding = '30px';
//   section.style.borderRadius = '15px';
//   section.style.border = '2px solid purple';
// }

for (const section of sections) {
  section.classList.add('section-card');
}
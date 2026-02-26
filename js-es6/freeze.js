const king = { name: 'Mufasa', age: 25, kingdom: 'Pride lands' };
// Object.freeze(king);
Object.seal(king);
delete king.age;
delete king.kingdom;
king.queen = 'Sarabi';
king.name = 'King Simba';
console.log(king);
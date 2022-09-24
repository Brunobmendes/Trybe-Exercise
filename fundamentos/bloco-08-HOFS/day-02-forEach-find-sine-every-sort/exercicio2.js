const books = require('./books_data');

function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  nameBook = books[0].name
  nameBook = books.forEach((element) => element.name.length < nameBook.length)
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
console.log(smallerName());
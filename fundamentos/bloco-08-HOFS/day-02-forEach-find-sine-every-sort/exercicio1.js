const books = require('./books_data');
// Adicione o código do exercício aqui:
function authorBornIn1947() {
  const velhinho = books.find((element) => element.author.birthYear === 1947);
  return velhinho.author.name;
}

console.log(authorBornIn1947());

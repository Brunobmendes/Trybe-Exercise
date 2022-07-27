//exercicio 01
console.log("exercicio 1: ");
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

console.log("Bem vinda, " + info.personagem);
console.log("");

//exercicio 02
console.log("exercicio 2: ");
console.log(info);
console.log("");

////exercicio 03
console.log("exercicio 3: ");
for (let key in info) {
  console.log(key);
}
console.log("");

//exercicio 04:
console.log("exercicio 4: ");
for (let value in info) {
  console.log(info[value]);
}
console.log("");

//exercicio 05:
console.log("exercicio 5: ");
let info2 = {
  personagem: "Tio Patinhas",
  origem: "'Christmas on Bear Mountain, Dell's Four Color Comics #178'",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};
for (let value in info2) {
  if (info[value] === info2[value]) {
    console.log("Ambos Recorrentes");
  } else {
    console.log(info[value] + " e " + info2[value]);
  }
}
console.log("");

//exercicio 06:
console.log("exercicio 6: ");
let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

console.log(
  "O livro favorito de " +
    leitor.nome +
    " " +
    leitor.sobrenome +
    " se chama " +
    leitor.livrosFavoritos[0].titulo
);

console.log("");

//exercicio 07:
console.log("exercicio 7: ");
leitor.livrosFavoritos[1] = {
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
};
console.log("");

////exercicio 08:
console.log("exercicio 8: ");
console.log(
  leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos."
);

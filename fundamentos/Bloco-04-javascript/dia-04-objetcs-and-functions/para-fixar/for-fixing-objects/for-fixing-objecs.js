
//1 - Crie um objeto player contendo as variáveis listadas abaixo.
console.log("exercise: 1");
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};
console.log()
console.log("")

//2 - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
console.log("exercise: 2");
console.log("A jogadora "+ player.name + " " + player.lastName + " tem " + player.age + " anos de idade");
console.log("")

//3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
console.log("exercise: 3");
console.log(player.bestInTheWorld)
console.log("")

//4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
console.log("exercise: 4");
console.log("A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes nos anos de " + player.bestInTheWorld)
console.log("")

//5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log("exercise: 5");
console.log("A jogadora possui "+ player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.")
console.log("")

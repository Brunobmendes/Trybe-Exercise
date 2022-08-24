// exercise 1
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (element) => {
  if (element % 3 === 0) {
    if (element % 5 === 0) {
      return true;
    }
  }
};

const isDivisible = numbers.find(findDivisibleBy3And5);
console.log(isDivisible);

// exercise 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (element) => {
  return element.length === 5 ? true : false;
};
const fiveLetters = names.find(findNameWithFiveLetters);
console.log(fiveLetters);

// exercise 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(idValue) {
  // Adicione seu código aqui
  return musicas.find((element) => element[0] === idValue);
}

console.log(findMusic('31031685'));

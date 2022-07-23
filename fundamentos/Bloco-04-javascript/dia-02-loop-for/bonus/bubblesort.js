//imprima em ordem crescente o valor do array
console.log("exercicio 1:")
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
  for (let index = 0; index < numbers.length; index++) {
    let numero1 = numbers[index];
    let numero2 = numbers[index + 1];
    if (numero1 > numero2) {
      numbers[index + 1] = numero1;
      numbers[index] = numero2;
    }
  }
}

console.log(numbers);
console.log("")


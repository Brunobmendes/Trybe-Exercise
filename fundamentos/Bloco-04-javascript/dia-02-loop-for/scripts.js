//exercise 1: Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
console.log("exercise 1: ");
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}
console.log("");

//exercise 2: Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
console.log("exercise 2:");
let soma;
for (let index = 0; index < numbers.length; index++) {
  soma =+ numbers[index];
   
}
console.log("soma:"+ soma)
console.log("")
//exercise 3: Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
console.log("exercise 3:");
const media = soma / numbers.length;
console.log("media:" + media);
console.log("")

//exercise 4: Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
console.log("exercise 4:");
if (media >20){
  console.log("media maior do que 20")
}else{
  console.log("valor menor ou igual a 20")
}

console.log("");

//exercise 5: Utilizando for, descubra qual o maior valor contido no array e imprima-o;
console.log("exercise 5:");
let maiorNumber = 0;
for (let index = 0; index < numbers.length; index++) {
  if(numbers[index] > maiorNumber){
    maiorNumber = numbers[index];
  }  
}
console.log(maiorNumber);
console.log("");



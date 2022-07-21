//valores
const aValue = 5; //valor de a
const bValue = 6; //valor de b
console.log("o valor de A é: " + aValue)
console.log("o valor de B é: " + bValue)

//exercicio 1: faça cinco programas, um com cada operação aritm
const calcType = "subtração"; //mudando para Soma, subtração, divisão, multiplicação, divisão, modulo
console.log("calculo")

if(calcType ==="soma"){ //calcula a soma
  calcResult = aValue + bValue 
  console.log("o resultado é:"+ (calcResult))

}else if(calcType ==="subtração"){ //calcula a subtração
  calcResult = aValue - bValue 
  console.log("o resultado é:"+ (calcResult))

}else if(calcType ==="multiplicação"){ //calcula a multiplicação
  calcResult = aValue * bValue 
  console.log("o resultado é:"+ (calcResult)) 

}else if(calcType ==="divisão"){ //calcula a divisão
  calcResult = aValue / bValue 
  console.log("o resultado é:"+ (calcResult))

}else if(calcType ==="modulo"){ //calcula modulo
  calcResult = aValue % bValue 
  console.log("o resultado é:"+ (calcResult))
}

//exercicio 2: Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

console.log("qual o maior?")

if
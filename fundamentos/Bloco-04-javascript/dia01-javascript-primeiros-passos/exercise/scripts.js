//valores
const aValue = 5; //valor de a
const bValue = 5; //valor de b
const cValue = 7
console.log("o valor de A é: " + aValue)
console.log("o valor de B é: " + bValue)
console.log("")
//exercicio 1: faça cinco programas, um com cada operação aritm
const calcType = "subtração"; //mudando para Soma, subtração, divisão, multiplicação, divisão, modulo
console.log("calculo:")

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
console.log("")
console.log("qual o maior dos 2?")
if (aValue > bValue){
  console.log(aValue + " é maior")

}else if (aValue < bValue){
  console.log(bValue + " é maior")

}else if (aValue === bValue){
  console.log("os numeros são iguais")
}
console.log("")
//exercicio 3: Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
console.log("qual o maior dos 3?")
if (aValue > bValue){ //valor de A é maior que B?
  if(aValue > Cvalue){ //valor de A é maior que c?
    console.log(aValue + " é maior")
  }else{
    console.log(cValue + " é maior")
  }
}else if (aValue < bValue){ //valor de A é menor que B?
  if(bValue > Cvalue){ //valor de B é maior que c?
    console.log(bValue + " é maior")
  }else{
    console.log(cValue + " é maior")
  }

}else if (aValue === bValue){ //valor de a é igual ao de b?
  if(aValue === cValue){ //valor de A é maior que c?
    console.log("os numeros são iguais")
  }else if (aValue > cValue){
    console.log(aValue + " é maior")
  }else if (aValue < cValue){
    console.log(cValue + " é maior")
  }
}
console.log("")
//exercicio 04: Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
console.log("é positivo?")
if(aValue > 0){
  console.log("positive")
}else if(aValue === 0){
  console.log("o valor é zero")
}else if(aValue < 0){
  console.log("negative")
}
console.log("")
//exercicios 05: 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.


//4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50

let primo
let maiorPrimo = 1

for (let primo = 2; primo < 50; primo++) {
  let ehPrimo = true
  for (let comparador = 2; comparador < primo; comparador++) {
     
    if(primo%comparador === 0){
      ehPrimo = false
    }
    
  }
  if (ehPrimo === true){
    maiorPrimo = primo
  }
  
}

console.log(maiorPrimo)
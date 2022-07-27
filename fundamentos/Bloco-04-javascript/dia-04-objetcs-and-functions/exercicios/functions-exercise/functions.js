//exercise 01:
console.log("exercise 01:");

function palindromo(palavra) {
  let palavraInversa = palavra.split().reverse().join("");
  return palavraInversa === palavra;
}

console.log(palindromo("briza"));
console.log("");
//exercise 02:
console.log("exercise 02:");

function retornaMaior(teste) {
  let maiorValor = teste[0];
  for (const key in teste) {
    if (teste[key] > maiorValor) {
      maiorValor = key;
    }
  }
  return maiorValor;
}
console.log(retornaMaior([2, 3, 6, 7, 10, 1]));
console.log("");

//exercise 03:
console.log("exercise 03:");
function retornaMenor(teste) {
  let menorValor = teste[0];
  for (let index in teste) {
    if (teste[index] < menorValor) {
      menorValor = index;
    }
  }
  return menorValor;
}
console.log(retornaMenor([2, 4, 6, 7, 10, 0, -3]));
console.log("");

//exercise 04:
console.log("exercise 04:");
function maiorNome(nomes) {
  let maiorNome = nomes[0];
  for (let key in nomes) {
    if (nomes[key].length > maiorNome.length) {
      maiorNome = nomes[key];
    }
  }
  return maiorNome;
}
console.log(
  maiorNome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);
console.log("");

//exercise 05:
console.log("exercise 05:");
function maisSeRepete(arrayInteiros) {
  numeroMaisSeRepete = arrayInteiros[0];
  for (let key in arrayInteiros) {
    let quantasVezesRepete = 0;
    for (
      let index = arrayInteiros[key];
      index < arrayInteiros.length;
      index++
    ) {
      let quantasVezesRepetiu = 0;
      if (key === index) {
        quantasVezesRepete++;
      }
      if (quantasVezesRepetiu > quantasVezesRepete) {
        quantasVezesRepete = quantasVezesRepetiu;
        numeroMaisSeRepete = arrayInteiros[key];
      }
    }
  }
  return numeroMaisSeRepete;
}
console.log(maisSeRepete([2, 3, 2, 5, 8, 2, 3]))
console.log("");

//exercise 06:
console.log("exercise 06:");
function  somantica(numeroNatural){
  let somatoriaNumeroNatural = 0
  if(numeroNatural > 0){
    for(let index = 1; index <= numeroNatural; index++){
      somatoriaNumeroNatural += index

    }
    return somatoriaNumeroNatural;
  }else {
    return "esse numero não é natural besta"
  }

}

console.log(somantica(5));
console.log("");

//exercise 07:
console.log("exercise 07:");

// function fimDaPalavra(word, ending){
//   if()


// }
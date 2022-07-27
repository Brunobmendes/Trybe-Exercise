//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.


let array = ['java', 'javascript', 'python', 'html', 'css'];

let retornaMaior = array[0];
let retornaMenor = 0;
let comparaMaior = '';

for (contador = 0; contador < array.length; contador++) {
  comparaMaior = array[contador];
  comparaProximo = array[contador+1]

  if (comparaMaior.length > retornaMaior.length) {
    retornaMaior = comparaMaior;
  }else{
    retornaMenor = comparaMaior

  }
}
console.log(retornaMaior);
console.log(retornaMenor)
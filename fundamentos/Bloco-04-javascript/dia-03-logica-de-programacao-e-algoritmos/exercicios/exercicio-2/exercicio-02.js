//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

const palavra = "Trybe";
let palavraInversa =  ""
for (let index = 0; index < palavra.length; index++) {
  palavraInversa += palavra[palavra.length - 1 - index]
}

console.log(palavraInversa);

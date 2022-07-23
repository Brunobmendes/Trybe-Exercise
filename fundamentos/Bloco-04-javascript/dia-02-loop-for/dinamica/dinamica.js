////2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let amount = 0

for (let index = 2; index <= 150; index++) {
  if(index%3 ===0){
    amount++
  }
  
}
if(amount === 50){
  console.log("mensagem secreta")

}
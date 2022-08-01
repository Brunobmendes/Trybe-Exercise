//1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let values in names) {
  console.log("Olá, " + names[values]);
}

//2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
for (let keys in names) {
  
  console.log(keys, names[keys])
}

Faça os seguintes exercícios de fixação:
Copie o código abaixo para realizar o exercício 01:
// callbacks-para-fixar-01.js

const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const getUser = (/*callback*/) => {
  const user = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russo',
  };
  // Insira o retorno da função `getUser`
};

console.log(getUser()); // Retorno esperado: "Olá! Meu nome é Ivan Ivanovich"
console.log(getUser()); // Retorno esperado: "Ivan é Russo"

1 - Adicione uma callback como parâmetro da função getUser para realizar as operações abaixo:
A função getUser, ao ser chamada com o parâmetro userFullName, deve retornar: "Olá! Meu nome é Ivan Ivanovich"
A função getUser, ao ser chamada com o parâmetro userNationality, deve retornar: "Ivan é Russo"

Copie o código abaixo para realizar o exercício 02:

// callbacks-para-fixar-02.js

const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (/*callback*/) => {
  setTimeout(() => {
    const user = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Russo',
    };

    // Dica: use esse `console.log()` abaixo para imprimir o resultado na tela.
    console.log(user);
  }, delay());
};

getUser(userFullName); // deve imprimir "Olá! Meu nome é Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan é Russo" depois de um certo tempo

2 - No código acima você tem a função getUser modificada, que agora funciona de modo assíncrono. Adicione uma callback como parâmetro da função getUser para realizar as operações abaixo:
A função getUser, ao ser chamada com o parâmetro userFullName, deve imprimir na tela: "Olá! Meu nome é Ivan Ivanovich"
A função getUser, ao ser chamada com o parâmetro userNationality, deve imprimir na tela: "Ivan é Russo"
Obs.: Analise o comportamento assíncrono da função getUser ao chamar getUser(userFullName) seguido de getUser(userNationality). Há momentos em que o nome da pessoa é impresso primeiro e outros em que a nacionalidade da pessoa é impressa primeiro!

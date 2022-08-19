//exercise 1
const newPerson = (name) => ({
  completeName: name,
  email: `${name}@trybe.com`,
});

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

//exercise 2
const LuckyNumber = (draw, myBet) => {
  if (draw === myBet) {
    return console.log('Parabéns você ganhou');
  } else {
    return console.log('Tente Novamente');
  }
};
const numberDraw = (myBet, func) => {
  let draw = Math.round(Math.random() * 5);
  return func(draw, myBet);
};

// numberDraw(3, LuckyNumber);

//exercise 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const answersComparator = (solve, studentAnswer) => {
  let score = 0;
  for (let i = 0; i < solve.length; i += 1) {
    if (solve[i] === studentAnswer[i]) {
      score += 1;
    } else if (solve[i] === 'N.A') {
      score += 0;
    } else {
      score -= 1;
    }
  }
  return score;
};
const resolve = (solve, studentAnswer, comparator) => {
  return comparator(solve, studentAnswer);
};

console.log(resolve(RIGHT_ANSWERS, STUDENT_ANSWERS, answersComparator));

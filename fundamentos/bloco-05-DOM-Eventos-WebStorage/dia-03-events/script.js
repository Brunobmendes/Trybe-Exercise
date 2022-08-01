

function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [
  //dias do calendário
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

let daysList = document.querySelector("#days");

let specialDays = {
  //add to object special days
  holiday: [24, 25, 31],
  friday: [4, 11, 18, 25],
};

function addElementToParent(elementCreated, parentAttached) {
  //adiciona um elemento criado a um parente
  const parentName = document.querySelector(parentAttached);
  parentName.appendChild(elementCreated);
}

for (let index = 0; index < decemberDaysList.length; index++) {
  //add all december days to calendar
  let createDays = document.createElement("li");
  createDays.className += "day";
  createDays.innerText = decemberDaysList[index];
  addElementToParent(createDays, "#days");
  verifySpecialDay(decemberDaysList[index], createDays);
}

function verifyHoliday(dia, classeCriada) {
  //verifica se o dia é feriado e adiciona uma classe a ele
  for (const valor of specialDays.holiday) {
    if (dia === valor) {
      classeCriada.className += "holiday";
    }
  }
}
function verifyFriday(dia, classeCriada) {
  //verifica se o dia é sexta e adiciona uma classe a ele
  for (const valor of specialDays.friday) {
    if (dia === valor && dia !== 25) {
      classeCriada.className += "friday";
    }
  }
}
function verifySpecialDay(dia, classeCriada) {
  //reúne as duas verificações de classe
  verifyHoliday(dia, classeCriada);
  verifyFriday(dia, classeCriada);
}

function createButton(buttonName){
  //cria um botão com o nome passado
  buttonHoliday = document.createElement('button')
  buttonHoliday.setAttribute('id', 'btn-holiday')
  buttonHoliday.innerText += buttonName
  addElementToParent(buttonHoliday, '.buttons-container')
  
}

createButton('Feriados')

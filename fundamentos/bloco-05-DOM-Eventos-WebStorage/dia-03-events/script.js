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
  createDays.className += " day";
  createDays.innerText = decemberDaysList[index];
  addElementToParent(createDays, "#days");
  verifySpecialDay(decemberDaysList[index], createDays);
}

function verifyHoliday(dia, classeCriada) {
  //verifica se o dia é feriado e adiciona uma classe a ele
  for (const valor of specialDays.holiday) {
    if (dia === valor) {
      classeCriada.className += " holiday";
    }
  }
}
function verifyFriday(dia, classeCriada) {
  //verifica se o dia é sexta e adiciona uma classe a ele
  for (const valor of specialDays.friday) {
    if (dia === valor) {
      classeCriada.className += " friday";
    }

  }
}
function verifySpecialDay(dia, classeCriada) {
  //reúne as duas verificações de classe
  verifyHoliday(dia, classeCriada);
  verifyFriday(dia, classeCriada);
}

function createButtonHoliday(buttonName) {
  //cria um botão com o nome passado
  let buttonHoliday = document.createElement("button");
  buttonHoliday.setAttribute("id", "btn-holiday");
  buttonHoliday.innerText += buttonName;
  addElementToParent(buttonHoliday, ".buttons-container");
  corMudadaHoliday("blue", "whitesmoke");
}

function corMudadaHoliday(colorChanged, colorOriginal) {
  //pega os parâmetros da cor original e a cor que vai mudar e altera o background quando o botão é apertado
  const buttonHoliday = document.querySelector("#btn-holiday");

  buttonHoliday.addEventListener("click", function () {
    //adiciona um evento de click ao botão de feriado que altera o background dele
    const indexFeriado = document.getElementsByClassName("holiday");
    for (let index = 0; index < indexFeriado.length; index++) {
      if (indexFeriado[index].style.backgroundColor !== colorChanged) {
        indexFeriado[index].style.backgroundColor = colorChanged;
      } else {
        indexFeriado[index].style.backgroundColor = colorOriginal;
      }
    }
  });
}
function createButtonFriday(buttonName) {
  //cria um botão com o nome passado
  let buttonFriday = document.createElement("button");
  buttonFriday.setAttribute("id", "btn-friday");
  buttonFriday.innerText += buttonName;
  addElementToParent(buttonFriday, ".buttons-container");
  corMudadaFriday(buttonName, );
}

function corMudadaFriday(textChanged, textOriginal) {
  //pega os parâmetros do text original e o text que vai mudar e altera o text quando o botão é apertado
  const buttonFriday = document.querySelector("#btn-friday");
  
  buttonFriday.addEventListener("click", function () {
    //adiciona um evento de click ao botão da sexta que altera o inner text dele
    const indexSexta = document.getElementsByClassName("friday");
    for (let index = 0; index < indexSexta.length; index++) {
      if (indexSexta[index].innerText !== textChanged) {
        indexSexta[index].innerText = textChanged;
      } else {
        indexSexta[index].innerText = specialDays.friday[index];
      }
    }
  });
}


//funções para dar zoom
function zoom(){
  mouseIn()
  mouseOut()
}
function mouseIn(){
  let days = document.querySelector("#days")
  days.addEventListener("mouseover", function(event){
    event.target.style.fontSize = "30px"
    event.target.style.fontSize = "300"
  })
}
function mouseOut(){
  let days = document.querySelector("#days")
  days.addEventListener("mouseout", function(event){
    event.target.style.fontSize = "20px"
    event.target.style.fontSize = "200"
  })
}



createButtonHoliday("Feriados");
createButtonFriday("Sextou")
zoom()


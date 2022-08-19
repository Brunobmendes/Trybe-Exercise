const wakeUp = () => {
  console.log('Acordando!!');
};
const hotCoffee = () => {
  console.log('Bora tomar café!!');
};
const goToSleep = () => {
  console.log('Partiu dormir!!');
};

const doingThings = (func) => {
  func();
};

doingThings(wakeUp);
doingThings(hotCoffee);
doingThings(goToSleep);

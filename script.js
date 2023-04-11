"use-strict";

window.addEventListener("load", start);

let counter = 0;
const numberList = [];

function start() {
  setInterval(numberGoingUp, 1000);
}

function numberGoingUp() {
  counter++;
  // console.log(counter);
  numberList.unshift(counter);
  if (numberList.length > 9) {
    numberList.pop();
  }
  // numberList.length = 9;
  console.log(numberList);
}

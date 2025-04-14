"use strict";

function calcTip(amount) {
  if (amount >= 50 && amount <= 300) {
    return (amount * 15) / 100;
  } else {
    return (amount * 20) / 100;
  }
}

const tipCalculator = calcTip(100);
console.log(tipCalculator);

const bills = new Array(125, 555, 44);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
];
console.log(total);

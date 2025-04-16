"use strict";
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i]);
  console.log(calcTip(bills[i]));
  tips.push(calcTip(bills[i]));

  totals.push(bills[i] + tips[i]);
}
console.log(tips);
console.log(totals);

// "use strict";
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   calcTip(bills[i]);
//   console.log(calcTip(bills[i]));
//   tips.push(calcTip(bills[i]));

//   totals.push(bills[i] + tips[i]);
// }
// console.log(tips);
// console.log(totals);

let numbers = [100, 200, 300, 400];
let average;
function sum(nums) {
  let total = 0;

  for (let n = 0; n < numbers.length; n++) {
    total += numbers[n];
  }
  return total;
}
const sumResult = sum(numbers);
console.log(sumResult);
average = sumResult / numbers.length;
console.log(`the average is ${average}`);

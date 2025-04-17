"use strict";
// let fTemps1 = [17, 21, 23];
// let fTemps2 = [12, 5, -5, 0, 4];

// for (let t = 0; t < fTemps1.length; t++) {
//   const printForecast = function (arr) {
//     return `... ${fTemps1[t]} in ${[t + 1]} days`;
//   };
//   console.log(printForecast(fTemps1));
// }
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let result = "";
  for (let t = 0; t < arr.length; t++) {
    result += `${arr[t]} in ${t + 1} days...`;
  }
  return result;
};

console.log("..." + printForecast(data1));

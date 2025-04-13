"use strict";
function fruitCutter(fruit) {
  return fruit * 2;
}
function juicerMachine(apples, oranges) {
  const applePieces = fruitCutter(apples);
  const orangePieces = fruitCutter(oranges);

  return `your apple juice contain ${applePieces} pieces of apple and your orange juice contain ${orangePieces} pieces of orange.`;
}
console.log(juicerMachine(2, 4));

// // calling function from inside another function practice questions and this is also called function composition or function chaining

// const addNumbers = function (num1, num2) {
//   return num1 + num2;
// };

// const subtractNumbers = function (num1, num2) {
//   return num1 - num2;
// };
// const multiplyNumbers = function (num1, num2) {
//   return num1 * num2;
// };
// function smallCalculator(num1, num2, operator) {
//   if (operator === "+") {
//     return addNumbers(num1, num2);
//   } else if (operator === "-") {
//     return subtractNumbers(num1, num2);
//   } else if (operator === "*") {
//     return num1 * num2;
//   }
// }

// console.log(smallCalculator(2, 3, "*"));

// second example of a printing machine
const documentType = function (type, pages) {
  return `you chose ${type} type of document that contains ${pages} pages.`;
};
const printMachine = function (doctype1, pages1, doctype2, pages2) {
  const documentType1 = documentType(doctype1, pages1);
  const documentType2 = documentType(doctype2, pages2);
  return `${documentType1} \n${documentType2}`;
};

console.log(printMachine("word", 5, "pdf", 4));

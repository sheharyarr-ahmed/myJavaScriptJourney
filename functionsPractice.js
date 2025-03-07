"use strict";

//ADDITION FUNCTION

function addNumber(num1, num2) {
  const sumFunction = num1 + num2;
  return sumFunction;
}

const additionFunction = addNumber(2, 5);
console.log(addNumber(2, 5));

// /MULTIPLY FUNCTION
function multiplyFunction(num1, num2) {
  console.log(`the numbers you enetered are ${num1} and ${num2}`);
  const multiplication = num1 * num2;
  return multiplication;
}

const resultOfMultiply = multiplyFunction(2, 8);
console.log(resultOfMultiply);

console.log(multiplyFunction());

//Conditional returns

function evenOdd(num) {
  let result;
  if (num % 2 === 0) {
    result = `you entered even number ${num}`;
  } else {
    result = `you enetered an odd number ${num}`;
  }

  return result;
}

const evenOddResult = evenOdd(4);
console.log(evenOddResult);

//POSITIVE OR NEGATIVE NUMBER
function poN(num) {
  let result;
  if (num > 0) {
    result = `the entered number ${num} is positive.`;
  } else if (num === 0) {
    result = "you entered zero";
  } else {
    result = `the entered number ${num} is negative`;
  }

  return result;
}

const resultpoN = poN(-2);
console.log(resultpoN);

// RETURNING  A BOOLEAN VALUE
function booleanFunction(age) {
  let value;
  if (age >= 18) {
    value = age >= 18;
  } else {
    value = "you are underage";
  }

  return value;
}

const resultBooleanFunction = booleanFunction(21);
console.log(resultBooleanFunction);

//function expression: another way of declaaring a function

const addNumbers = function (num1, num2) {
  const sum = num1 + num2;

  return sum;
};

const resultaddNumbers = addNumbers(2, 7);
console.log(resultaddNumbers);

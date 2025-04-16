"use strict";

const arrowFunction = (input) => {
  const result;
  return console.log((result = 10 - input));
};

console.log(arrowFunction(2));

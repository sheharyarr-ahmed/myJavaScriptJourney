"use strict";
function showRoom(clientBudget) {
  let result;
  if (clientBudget >= 500000) {
    result = "you can buy an corolla";
  } else if (clientBudget >= 1000000) {
    result = "you can buy an civic";
  } else {
    result = "go and get more money";
  }
  return result;
}

const functionStored = showRoom(500000);
console.log(functionStored);

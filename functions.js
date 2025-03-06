"use strict";

// here in this we learn about function, how do create a functio and then how do well call it
function logger() {
  // function keyword, function's name and "()" for parameters and code block
  console.log("my name is Sheharyar");
}

// invoking/ running/ calling a function
logger();
logger();

function fruitProcessor(banana, orange) {
  // banana and orange as input data and are also varables specified for this function only which will ge defined when we will call this function
  console.log(banana, orange);
  const juice = `this juice has ${banana} banana's and ${orange} oranges.`;
  return juice; // the return holds the result of this function which has to stored or captured in an varibale or simply can be logged, the return's part specifically is replaced by the function's name along with arguements and holding result as well.
}

fruitProcessor(0, 1); // calling the function and now also recieves the input data which is now ccalled arguements

const orangeJuice = fruitProcessor(0, 5); //storing the result as the return is now replaced with fruitProcessor(0, 5) and it has to stored in the variable and then can be logged on the next line
console.log(orangeJuice);
console.log(fruitProcessor(0, 5)); //logged without storing the function into a variable

// const age = 1;
// age >= 18
//   ? console.log("you are an adult")
//   : console.log("you are not an adult");

// example of ternary operator
/*
const firstName = prompt("enter your name");

const std =
  firstName === "sheharyar"
    ? console.log("you are an student")
    : console.log("you are not an student");
*/

// another example of ternary operator through which we are assigning an value to a variable

// const age = 4;
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

const cgpa = 3;
const nUST =
  cgpa >= 2 ? "you are an NUST student" : "you are not an nust student";

console.log(nUST);

// the beneath code shows that the condiotion which we applied in the ternary can also
// be used as an template string

console.log(
  `hi, i am sheharyar and i am an ${
    cgpa >= 2 ? "you are an NUST student" : "you are not an nust student"
  }`
);

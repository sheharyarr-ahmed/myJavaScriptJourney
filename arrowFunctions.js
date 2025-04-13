"use strict";

// thats the first type of writing an arrow function, first we write the parameter then what we wanr and then to make the arrow function we set the variable for it and then to return the value we store the arrow function in a variable
const ageCalculator = (birthYear) => 2025 - birthYear;
const resultAgeCalculator = ageCalculator(2002);
console.log(resultAgeCalculator);

// thats the second type of arrow function in which multiple numbers of parameters are included and curly brackets and return keyword is also included

const retirementYear = (firstName, birthYear) => {
  const age = 2025 - birthYear;
  const retirement = 60 - age;
  //   return retirement;
  return `${firstName} has ${retirement} until retirement`;
};

// console.log(retirementYear("sheharyar", 2002));

const retirementCalculator = retirementYear("sheharyar", 2002);
console.log(retirementCalculator);

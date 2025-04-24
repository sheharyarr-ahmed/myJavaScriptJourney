"use strict";
// the use of spread operator
// with the use of spread operator we can make th eexact same copy of an Array and object of their porperties
// this is also called shallow copy
const shery = {
  name: "sheharyar",
  lastName: "ahmed",
  age: 12,
  car: "grande",
};

// const shery2 = {
//   ...shery,
// };

const shery2 = {
  ...shery,
  favouriteCar: "civic RS",
};

console.log(shery2);

const nustOriginal = {
  shery: "msse",
  umer: "msce",
  hamza: "msse",
  passed: [],
};

const nustClone = structuredClone(nustOriginal);
nustClone.passed.push("sana jabbar");
// notice how the original one remained same and the clone got the changes. now this the advantage of the structuredClone
console.log(nustClone);
console.log(nustOriginal);

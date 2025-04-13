"use strict";

// const listOfFriends = ["shery", "abdul", "hamza"];
// console.log(listOfFriends);

// const arrayExample = new Array("shery", "huda", "zarish");
// console.log(arrayExample);

// console.log(listOfFriends[2]);
// console.log(listOfFriends.length);
// listOfFriends[2] = "jaweria";
// console.log(listOfFriends);

// console.log(arrayExample.length);
// console.log(arrayExample[arrayExample.length - 1]);

// const cars = ["grande", "civic", "hyundai"];
// console.log(cars);
// console.log(cars.length);
// console.log(cars[2]);
// cars[2] = "sonata n line";
// console.log(cars);
// console.log(listOfFriends);
// cars.push(listOfFriends);
// console.log(cars);

const numArray = [2002, 2004, 2006, 2008];
console.log(numArray);
console.log(numArray.length);
// console.log(numArray[numArray.length - 1]);

const ageFinder = function (age) {
  return 2025 - age;
};

const age1 = ageFinder(numArray[0]);
const age2 = ageFinder(numArray[1]);
const age3 = ageFinder(numArray[2]);
const age4 = ageFinder(numArray[3]);

console.log(age1, age2, age3, age4);
const newArray = [age1, age2, age3, age4];
console.log(newArray);

const newAges = [
  ageFinder(numArray[0]),
  ageFinder(numArray[1]),
  ageFinder(numArray[2]),
  ageFinder(numArray[numArray.length - 1]),
];
console.log(newAges);

// function add(a, b) {
//   return a + b;
// }

// const addition = add(2, 3);
// console.log(addition);

// const addition = function (a, b) {
//   return a + b;
// };

// const addition = (a, b) => {
//   return a + b;
// };

// console.log(addition(2, 2));

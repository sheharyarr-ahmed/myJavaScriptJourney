"use strict";

// const meMyself = {
//   name: "Sheharyar",
//   age: 23,
//   education: "MASTERS",
//   hobbies: ["coding", "tarding"],
// };

// console.log(meMyself);

// const brandT = "Toyota";
// const toyotaShowroom = {
//   corollaToyota: "sedan",
//   hilluxToyota: "truck",
//   fortunerToyota: "suv",
// };
// console.log(toyotaShowroom["fortuner" + brandT]);
// // console.log(toyotaShowroom["fortuner " + brandT]);
// console.log(toyotaShowroom);
// console.log(toyotaShowroom.corollaToyota);

const showRoom = prompt(
  "Welcome to Honda Dealetrship! choose the segment of the car which you are looking for: sedan, suv or crossover."
);
const hondaDealership = {
  sedan: "civic",
  suv: "brv",
  crossover: "hrv",
};

// console.log(hondaDealership[showRoom]);
// console.log(hondaDealership["sedan"]);

if (hondaDealership[showRoom]) {
  console.log(hondaDealership[showRoom]);
} else {
  console.log(
    "sorry you entered the wrong segment of the car, please choose from the following: sedan, suv por crossover"
  );
}

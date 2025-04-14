// "use strict";
// // const mobilename = prompt("enter mobile name");
// const mobilePrices = {
//   iphone: "$999",
//   samsung: "$899",
//   oppo: "$499",
// };
// console.log(mobilePrices);
// mobilePrices["nokia"] = "$300";
// // console.log(mobilePrices[mobilename]);
// mobilePrices["oppo"] = "$500";
// console.log(mobilePrices);

// const bikeShowroom = {
//   yamaha: "sports",
//   honda: "commuter",
//   suzuki: "touring",
// };

// console.log(bikeShowroom.yamaha);
// console.log(bikeShowroom["honda"]);

// const people = [
//   { name: "Shery", job: "developer" },
//   { name: "Huda", job: "designer" },
// ];
// console.log(people[1]["job"]);
// console.log(people[1].job);

// people[0]["job"] = "full-stack-developer";
// console.log(people);

// // const user = {
// //   name: "Hamza",
// //   greet: function () {
// //     return `Hello, ${this.name}!`;
// //   },
// // };

// const student = {
//   name: "Sara",
//   age: 20,
//   course: "Math",
// };
// student["cgpa"] = 3.8;
// student.city = "hyderabad";
// console.log(student);

"use strict";

const garage = {
  owner: "Sheharyar",
  cars: ["Civic", "Hilux", "Corolla", "BMW i7"],
  segments: {
    sedan: 2,
    suv: 1,
    luxury: 1,
  },
};
console.log(
  `${garage["owner"]} owns ${garage["cars"].length} cars and his fvourite car is ${garage["cars"][0]}`
);

const newCar = prompt("enter the name of the new car");
garage["cars"].push(newCar);
console.log(garage);
const segment = prompt(`Which segment does ${newCar} belong to?`);
if (garage["segments"][segment]) {
  garage["segments"][segment]++;
} else {
  garage["segments"][segment] = 1;
}
console.log(garage);

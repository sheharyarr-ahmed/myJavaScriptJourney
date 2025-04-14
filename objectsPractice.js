"use strict";
// const mobilename = prompt("enter mobile name");
const mobilePrices = {
  iphone: "$999",
  samsung: "$899",
  oppo: "$499",
};
console.log(mobilePrices);
mobilePrices["nokia"] = "$300";
// console.log(mobilePrices[mobilename]);
mobilePrices["oppo"] = "$500";
console.log(mobilePrices);

const bikeShowroom = {
  yamaha: "sports",
  honda: "commuter",
  suzuki: "touring",
};

console.log(bikeShowroom.yamaha);
console.log(bikeShowroom["honda"]);

const people = [
  { name: "Shery", job: "developer" },
  { name: "Huda", job: "designer" },
];
console.log(people[1]["job"]);
console.log(people[1].job);

people[0]["job"] = "full-stack-developer";
console.log(people);

// const user = {
//   name: "Hamza",
//   greet: function () {
//     return `Hello, ${this.name}!`;
//   },
// };

const student = {
  name: "Sara",
  age: 20,
  course: "Math",
};
student["cgpa"] = 3.8;
student.city = "hyderabad";
console.log(student);

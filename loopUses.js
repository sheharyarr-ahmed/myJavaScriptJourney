"use strict";

const egArray = new Array("shery", "grande", "million", [
  "asif",
  "umer",
  "basit",
]);

// console.log(egArray.length - 1);
// for (let i = 0; i < 4; i++) {
//   console.log(egArray[i]);
// }

for (let i = 0; i < egArray.length; i++) {
  console.log(egArray[i]);
}

const shery = new Array("shakeel ahmed", "bmw", "rolex", "civic");
const newOne = ["shakeel ahmed", "ferrari", "pathek", "lc300"];
console.log(shery.length - 1, newOne.length - 1);
// for (let j = 0; )
for (let j = 0; j < shery.length; j++) {
  shery[j] = newOne[j];
  //   console.log(shery);
}
console.log(shery);

const anotherOne = ["lambo", "audi"];
for (let q = 0; q < anotherOne.length; q++) {
  shery.push(anotherOne[q]);
}

console.log(shery);

// filling an empty array by replacing values from another arrray

const emptyArray = [];
for (let w = 0; w < shery.length; w++) {
  emptyArray[w] = shery[w];
}
console.log(emptyArray);

const money = [10, 100, 1000, 100000];
const newMoney = [];

for (let m = 0; m < money.length; m++) {
  newMoney[m] = money[m] - 1;

  if (m === 2) {
    money[m] = "barca";
  }
}

console.log(newMoney);
console.log(money);

for (let e = 0; e < money.length; e++) {
  if (typeof money[e] === "string") break;
  console.log(money[e]);
}

for (let l = 0; l < money.length; l++) {
  if (typeof money[l] !== "number") continue;
  console.log(money[l]);
}

const cars = ["bmw", "ferrari", "lc300"];
cars.splice(1, 0, "civic");
console.log(cars);

for (let t = 0; t < cars.length; t++) {
  if (t === 2) {
    cars.splice(2, 0, "audi");
  }
}

// looping backwards
console.log(cars);
// console.log(cars.length - 1);
for (let g = cars.length - 1; g >= 0; g--) {
  console.log(cars[g]);
}

// loop inside of an loop

for (let b = 1; b <= 3; b++) {
  console.log(`the cars available right now are car${b}`);

  for (let j = 1; j <= 2; j++) {
    console.log(`this car has ${j} seating options`);
  }
}

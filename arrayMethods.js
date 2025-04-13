"use strict";
const cars = new Array("grande", "i7", "lc300");
console.log(cars);
// adding element
cars.push("civic");
console.log(cars);
cars.unshift("prado");
console.log(cars);

// removing elements
cars.pop();
console.log(cars);
cars.shift();
console.log(cars);

console.log(cars.indexOf("i7")); //returns the index of an element.
console.log(cars.includes("grande")); //returns whether the element is included or not.
console.log(cars.includes("honda"));

const myGarage = ["civic RS", "bmw i7", "lc 300"];
console.log(myGarage);
if (myGarage.includes("bmw i7")) {
  console.log("such an nice car you have");
} else {
  console.log("ok nice cars");
}

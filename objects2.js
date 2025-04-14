"use strict";
// now in order to add new segments in the honda Dealership object there are two wayts for adding one by dot and the other is by square brackets.
// const que = prompt("what you are looking for?");
const showRoom = {
  corolla: "toyota",
  civic: "honda",
  revo: "toyota",
  camry: "toyota",
};
// console.log(showRoom);
//  by dot method
showRoom.i7 = "bmw";
// console.log(showRoom);

// by square bracket method
showRoom["hillux"] = "toyota";
// console.log(showRoom);

// console.log(showRoom["civic"]);

// if (showRoom[que]) {
//   console.log(showRoom[que]);
// } else {
//   console.log("car not available");
// }

const jonas = {
  firstName: "jonas",
  friends: ["michael", "peter", "steven"],
};

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`
);

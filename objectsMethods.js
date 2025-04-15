"use strict";
const shery = {
  fname: "shakeel ahmed",
  age: 65,
  type: "teen",
  graduate: 2024,
  car: "grande",
  mobile: "iPhone",
  laptop: "macbook pro",
  hasDriversLicense: false,
  //   yearsUntilRetirement: function (age) {
  //   yearsUntilRetirement: function () {
  //     if (this.age <= 60) {
  //       return `${60 - this.age} years are left until retirement`;
  //     } else {
  //       return "you are already retired";
  //     }
  //   },
  yearsUntilRetirement: function () {
    if (this.age >= 60) {
      this["type"] = `old, as your age is ${this.age}`;
      return (
        this["type"], `your age if it gets subtracted by 2 ${2 - this.age}`
      );
    }
  },

  summary: function () {
    return `the object's name is shery and his age is ${
      this.age
    } and this is how many years are left until his retirement ${this.yearsUntilRetirement()} and what do we need to know is that does he own a drivers license.  ${
      this.hasDriversLicense ? "yes" : "no"
    }.`;
  },
};
console.log(shery["yearsUntilRetirement"]());
// shery["yearsUntilRetirement"]();
console.log(shery.age);
console.log(shery.type);

console.log(shery["summary"]());

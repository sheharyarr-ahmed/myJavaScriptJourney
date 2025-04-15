"use strict";
const mark = {
  fullName: "Mark Miller",
  mass: 18,
  height: 1.69,
  bmi: "unknown",
  calcBMI: function () {
    return (this.bmi = this.mass / (this.height * this.height));
  },
};
const john = {
  fullName: "John Smith",
  mass: 672,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / (this.height * this.height));
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `Mark Miller's BMI ${mark.bmi} is higher than John Smith's BMI ${john.bmi}`
  );
} else {
  console.log(
    `John Smith's BMI ${john.bmi} is higher than Mark Miller's BMI ${mark.bmi}`
  );
}

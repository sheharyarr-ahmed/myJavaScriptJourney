// this example is for AND && operator
/*
const sscPassed = true;
const hscPassed = true;
// const hscPassed = false;

if (sscPassed && hscPassed) {
  console.log("yes you can take admission in the university");
} else {
  console.log("you canot take admission in the university");
}
*/

// this is the example of OR || operator
/*
const haveCar = false;
// const haveCar = true;
const haveLicense = false;
if (haveCar || haveLicense) {
  console.log("yes you can drive");
} else {
  console.log("you canot drive the car");
}
this is the example of NOT ! operator
console.log(!haveCar);
*/

const sscPassed = true;
const hscPassed = true;
const bscPassed = true;

if (sscPassed || (hscPassed && !bscPassed)) {
  console.log("yes you can be hsc verified");
} else {
  console.log("no you cannot be hsc verified");
}

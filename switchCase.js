// const day = prompt("Enter any day of the week:");
// console.log(`You entered ${day}`);

// switch (day) {
//   case "monday":
//     console.log("today is monday");
//     break;
//   case "tuesday":
//     console.log("today is tuesday");
//     break;
//   case "wednesday":
//     console.log("today is wednesday");
//     break;
//   case "thursday":
//     console.log("today is thursday");
//     break;
//   case "friday":
//     console.log("todayis friday");
//     break;
//   case "saturday":
//     console.log("today is saturday");
//     break;
//   case "sunday":
//     console.log("today is sunday");
//     break;
//   default:
//     console.log("you entered an wrong day");
// }

// the beneath code is of practice for if/else statement
/*
const day = prompt("enter any day");

if (day === "monday") {
  console.log("today is monday");
} else if (day === "tuesday") {
  console.log("today is tuesday");
} else if (day === "wednesday" || day === "thursday") {
  console.log("today is wednesday and thursday");
} else if (day === "friday") {
  console.log("today is friday");
} else if (day === "saturday" || day === "sunday") {
  console.log("today is saturday and sunday");
} else {
  console.log("you entered the wrong day");
}
*/

// the below code is practice of switch case statement
console.log("students list");

const std = prompt("enter your name");
console.log(`name: ${std}`);

switch (std) {
  case "sheharyar":
    console.log("yes you are an student");
    break;
  case "umer":
    console.log("yes you are an student");
    break;
  case "hamza":
    console.log("yes you are an student");
    break;
  default:
    console.log("you are not an student");
}

console.log(
  "this portion is for equality operators the difference between === and =="
);

const x = 10;
if (x === 10)
  console.log(
    "this is correct and this shows working of strict equality operator"
  );

const y = "12";
if (y == 12) {
  console.log(
    "this is working and this shows the working of lose equality operator"
  );
}

// now see this concept

const z = "13";
if (z === 13) {
  console.log("if this works means that z is a string");
} else {
  console.log("if this didn't work means that z is a number");
}

// let t = prompt("enter a number"); //in the prompt function if we input any number it will get stored as a string
// t = Number(t); //this will convert the input string into number
/*let t = Number(prompt("enter any number"));
if (t === 10) {
  console.log("you chose the right number");
} else {
  console.log("you would have choosen 10");
}
*/

// this is the example of multiple if else statements and strict and loose equality operators and strict difference operator
/*
const car = prompt("Enter you car name");

if (car === "bmw") {
  console.log("nice car");
} else if (car === "audi") {
  console.log("nice car");
} else {
  console.log("go and get a good car");
}

if (car !== "bmw") {
  console.log("why not an luxury car");
}
*/

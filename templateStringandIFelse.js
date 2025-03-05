const myDegree = "BS SOFTWARE ENGINEERING";
const myUni = "SZABIST";
const firstName = "Sheharyar";
const lastName = "Ahmed";
console.log(
  `Hello, I am ${firstName} ${lastName} and I have compleetd my degree in ${myDegree} from ${myUni}`
);

console.log(
  "this is called template string in this you can assign the variable value with in the string or while declaring the variable and can perfrom some operations and can create or make the sentence start from the new line but the main thing to remember is that the template string start from (`)"
);

const car = "Grande";
const priceOfCar = 4500000;
const priceNow = 5000000;
console.log(
  `hi, iam ${firstName} and i have ${car} whose price is ${priceOfCar}.
   Is it true that current price of car is now more than the price I bought the car for? ${
     priceNow > priceOfCar
   }`
);

console.log(
  "now this part represents about if else control structure lets ee what really if else control structure is with an example"
);

const myAge = 15;
const cnicAge = 18;

if (myAge >= 18) {
  console.log(
    `Yes, you are now eligible to have your CNIC as your age is ${myAge}`
  );
} else {
  console.log(
    `As of now you are not eligible to have your own CNIC as your age is should be equals or above ${cnicAge}`
  );
}

const dreamCar = "Civic RS";
const dreamCarPrice = 10;
let accountBalance = 50;
let paymentMethod;

if (accountBalance >= dreamCarPrice) {
  paymentMethod = "check";
  console.log(
    `you can pay for your brand new ${dreamCar} via ${paymentMethod}`
  );
} else {
  paymentMethod = "installments";
  console.log(`you can pay for your ${dreamCar} in ${paymentMethod}`);
}

// below is the example for the type conversion

let x = "10";
x = Number(x) + 2;
x = Number(14) + String(2);
console.log(x);

// use case for falsy values
// there are 5 flasy values null, false, '', 0, undefined, NaN;
// the condition in that if else control structure is being converted into Boolean via coercion by Boolean()
let y = 0;
if (y) {
  console.log("if y is true this will gonna show");
} else {
  console.log(" y is an falsy value");
}

const l = null;
if (l) {
  console.log("l is true");
} else {
  console.log("l is falsy value");
}

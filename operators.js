const nums = 23;
console.log(nums - 10);

const smallNum = 60;
console.log(smallNum - 5, smallNum * 20, smallNum);

const firstName = "Sheharyar";
const lastName = "Ahmed";
console.log(firstName + lastName);
console.log(firstName + " " + lastName);

let y = 15;
console.log(y + 15);

y = 20 + 10;
console.log(y);

y += 12;
console.log(y);

// comparison operators
const thisYear = 2025;
const myBirthYear = 2002;
console.log(thisYear - myBirthYear);
console.log(thisYear > myBirthYear);

let sheryAge = 23;
console.log(sheryAge);
sheryAge++;
console.log(sheryAge);

const sheryC = 99;
const basitC = 98;
const average = (sheryC + basitC) / 2;

console.log(average);
console.log(average > 100);

const head = "this is heading";
console.log(head);
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higherthan the John's BMI");
} else {
  console.log("John's's BMI is higherthan the Mark's BMI");
}
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than the John's BMI ${BMIJohn}`);
} else {
  console.log(
    `John's's BMI ${BMIJohn} is higher than the Mark's BMI ${BMIMark}`
  );
}

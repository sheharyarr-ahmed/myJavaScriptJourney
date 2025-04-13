// TEST 1
/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(
  `the average score of Dolphins is ${scoreDolphins} and the average score of Koalas is ${scoreKoalas}`
);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy ");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas wins the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the throphy");
}
*/

// BONUS 1
/*
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

console.log(
  `the average score of Dolphins is ${scoreDolphins} and the average score of Koalas is ${scoreKoalas}`
);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy ");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas wins the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the throphy");
}
*/

// BONUS 2

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

console.log(
  `the average score of Dolphins is ${scoreDolphins} and the average score of Koalas is ${scoreKoalas}`
);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy ");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas wins the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the throphy");
} else {
  console.log("no one wins the trophy");
}

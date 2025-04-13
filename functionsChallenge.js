"use strict";
const calcAverage = (scr1, scr2, scr3) => {
  const averageScore = (scr1 + scr2 + scr3) / 3;
  return averageScore;
};

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win ${avgDolphins} vs ${avgKoalas}`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win ${avgKoalas} vs ${avgDolphins}`;
  } else {
    return `no team wins`;
  }
};

console.log(checkWinner(scoreDolphins, scoreKoalas));
console.log(checkWinner(400, 150));

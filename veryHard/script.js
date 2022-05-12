// *VERY HARD: You are given coins of different denominations
// and a total amount of money amount.
// Write a function to compute the fewest number of coins that you need
// to make up that amount. If that
// amount of money cannot be made up by any combination of the coins,
//  return -1.

let amount = 11;
let array = [1, 2, 5];

let input = function (coins, amount) {
  let biggestNum;
  let counter = 0;
  while (amount > 0) {
    biggestNum = Math.max(...coins);
    if (biggestNum > amount) {
      coins = coins.filter(function (removing) {
        return removing !== biggestNum;
      });
      if (coins.length == 0) {
        return -1;
      }
    } else {
      amount -= biggestNum;
      counter++;
    }
    console.log(coins);
  }
  return counter;
};

console.log(input(array, amount));

"use sctrict";

// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers.
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2
const iterable = [10, 20, 30];

let arrayAverage = function (array) {
  sum = 0;
  for (let a of array) sum += a; //iterate through array with 'of' then sum = sum + array
  console.log(sum / array.length);
};

arrayAverage(iterable);
arrayAverage([1.5, 3, 2.5, 1]);

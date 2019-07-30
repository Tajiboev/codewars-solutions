/*
A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
*/

// output [{a,b}...]

function removeNb(n) {
  if (n <= 0) return [];

  let sum = (n * (n + 1)) / 2,
    possible_values = [];

  for (let a = 1; a <= n; a++) {
    let b = (sum - a) / (a + 1);
    if (b % 1 === 0 && b <= n) possible_values.push([a, b]);
  }

  return possible_values === [] ? null : possible_values;
}

console.log(removeNb(26));

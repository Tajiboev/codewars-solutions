/*
    Given a positive integral number n, return a strictly increasing sequence 
    (list/array/string depending on the language) of numbers, 
    so that the sum of the squares is equal to n².

    If there are multiple solutions (and there will be), 
    return as far as possible the result with the largest possible values:
*/

const decompose = n => {
  if (n <= 2) return null;
  let nSquared = n * n,
    squares = [],
    result = [];

  for (let i = n - 1; i > 0; i--) {
    squares.push(i * i);
  }

  squares.reduce((accumulator, currentValue) => {
    if (currentValue > accumulator) {
      return accumulator - 0;
    } else {
      result.push(Math.sqrt(currentValue));
      return accumulator - currentValue;
    }
  }, nSquared);

  return result.reverse();
};

console.log(decompose(9));

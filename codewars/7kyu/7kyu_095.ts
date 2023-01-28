// Recursion #1 - Factorial

import { assert } from 'chai';

export const factorial = (n: number): number => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

const factorialTable = [1, 1, 2, 6, 24];

describe('Basic tests', () => {
  factorialTable.forEach((v, i) => {
    it(`factorial(${i})`, () => {
      assert.strictEqual(factorial(i), v);
    });
  });
});

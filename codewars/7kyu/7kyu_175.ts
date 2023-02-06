// Easy Line

import { assert } from 'chai';

export function easyLine (n: number): number {
  const sum = getBinomialCoeffs(n).reduce((acc, a) => acc + Math.pow(a, 2), 0);
  return Math.round(Math.log(sum));
}

const getBinomialCoeffs = (targetRow: number): number[] => {
  let rowNumber = 0;
  const coeffs: number[][] = [[1]];

  while (rowNumber !== targetRow) {
    rowNumber++;
    const currentCoeffs: number[] = [];
    for (let i = 0; i <= rowNumber; i++) {
      if (i === 0 || i === rowNumber) {
        currentCoeffs.push(1);
      } else {
        currentCoeffs.push(coeffs[rowNumber - 1][i - 1] + coeffs[rowNumber - 1][i]);
      }
    }
    coeffs.push(currentCoeffs);
  }

  return coeffs[targetRow];
};

// Shorter version (by: salihk33)
// export function easyLine (n: number): number {
//   let sum = 1;
//   let prev = 1;
//   for (let i = 0; i < n; i++) {
//     const next = prev * (n - i) / (i + 1);
//     sum += next * next;
//     prev = next;
//   }
//   return Math.round(Math.log(sum));
// }

// Test
describe('Fixed Tests easyLine', function () {
  it('Basic tests', function () {
    assert.strictEqual(easyLine(7), 8);
    assert.strictEqual(easyLine(13), 16);
    assert.strictEqual(easyLine(17), 22);
    assert.strictEqual(easyLine(19), 24);
    assert.strictEqual(easyLine(100), 136);
    assert.strictEqual(easyLine(248), 340);
  });
});

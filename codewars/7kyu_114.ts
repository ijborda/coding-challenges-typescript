// Simple Fun #2: Circle of Numbers

import { assert } from 'chai';

// export function isNice (arr:number[]): boolean {
//   if (arr.length === 0) {
//     return false;
//   }
//   return Array.from(new Set(arr.sort((a, b) => a - b)))
//     .every((a, i, arr) => isNeighboring(a, arr[i - 1], arr[i + 1]));
// }

// const isNeighboring = (current: number, before: number | undefined, after: number | undefined): boolean => {
//   const isNear = (num: number | undefined): boolean => {
//     if (num || num === 0) {
//       return Math.abs(num - current) === 1;
//     }
//     return false;
//   };
//   return isNear(before) || isNear(after);
// };

// Refactor
export function isNice (arr:number[]): boolean {
  return arr.length ? arr.every(a => arr.includes(a - 1) || arr.includes(a + 1)) : false;
}

describe('isNice', function () {
  it('Sample Tests', function () {
    assert.strictEqual(isNice([2, 10, 9, 3]), true);
    assert.strictEqual(isNice([3, 4, 5, 7]), false);
    assert.strictEqual(isNice([]), false);
    assert.strictEqual(isNice([0, -1, 1]), true);
    assert.strictEqual(isNice([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, -2, -1]), true);
  });
});

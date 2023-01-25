// How Green Is My Valley?

import { assert } from 'chai';

export function makeValley (arr: number[]):number[] {
  const left: number[] = [];
  const right: number[] = [];

  arr.sort((a, b) => b - a)
    .forEach((a, i) => i % 2 ? right.unshift(a) : left.push(a));

  return [...left, ...right];
}

function testing (actual:number[], expected:number[]) {
  assert.deepEqual(actual, expected);
}

describe('Fixed Tests', function () {
  it('Basic tests makeValley', function () {
    testing(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]), [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]);
    testing(makeValley([20, 7, 6, 2]), [20, 6, 2, 7]);
    testing(makeValley([14, 10, 8]), [14, 8, 10]);
    testing(makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1]), [20, 17, 12, 10, 4, 2, 1, 1, 2, 9, 12, 13, 18]);
  });
});

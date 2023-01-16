// Looking for a benefactor

import { expect, assert } from 'chai';

export function newAvg (arr: number[], newavg: number): number {
  const sum = arr.reduce((acc, a) => acc + a, 0);
  const targetSum = newavg * (arr.length + 1);
  const next = Math.ceil(targetSum - sum);

  if (next <= 0) {
    throw new Error('Expected New Average is too low');
  }
  return next;
}

function testing (arr:number[], newavg:number, expected:number) {
  assert.strictEqual(newAvg(arr, newavg), expected);
}

describe('Fixed Tests newAvg', function () {
  it('Basic tests', function () {
    testing([14, 30, 5, 7, 9, 11, 16], 90, 628);
    testing([14, 30, 5, 7, 9, 11, 15], 92, 645);
    expect(function () { newAvg([14, 30, 5, 7, 9, 11, 15], 2); }).to.throw('Expected New Average is too low');
  });
});

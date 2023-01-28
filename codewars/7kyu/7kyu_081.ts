// Rotate for a Max

import { assert } from 'chai';

export function maxRot (n:number):number {
  const len = n.toString().length;
  const sequence: number[] = [n];

  for (let toBeFixed = 0; toBeFixed < len - 1; toBeFixed++) {
    if (toBeFixed === n.toString().length) {
      break;
    }
    n = rotate(n, toBeFixed);
    sequence.push(n);
  }
  return Math.max(...sequence);
}

const rotate = (number: number, numToFix: number): number => {
  const fixed = number.toString().slice(0, numToFix);
  const remaining = number.toString().slice(numToFix);
  const remainingRotated = remaining.slice(1) + remaining.slice(0, 1);
  return +`${fixed}${remainingRotated}`;
};

function testing (actual:number, expected:number) {
  assert.strictEqual(actual, expected);
}

describe('Fixed Tests', function () {
  it('Basic tests maxRot', function () {
    testing(maxRot(56789), 68957);
    testing(maxRot(38458215), 85821534);
    testing(maxRot(195881031), 988103115);
    testing(maxRot(896219342), 962193428);
    testing(maxRot(300163756), 300163756);
  });
});

// Leap Years

import { assert } from 'chai';

export function isLeap (year: number):boolean {
  return (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0));

  // if (year % 4 === 0) {
  //   if (year % 100 === 0) {
  //     if (year % 400 === 0) {
  //       return true;
  //     }
  //     return false;
  //   }
  //   return true;
  // }
  // return false;
}

describe('Leap Years - Sample Tests', function () {
  it('should return false with not leap year', function () {
    assert.strictEqual(isLeap(1234), false);
    assert.strictEqual(isLeap(2010), false);
    assert.strictEqual(isLeap(2013), false);
    assert.strictEqual(isLeap(1234), false);
    assert.strictEqual(isLeap(1100), false);
  });

  it('should return true with leap year', function () {
    // assert.strictEqual(isLeap(1984), true);
    assert.strictEqual(isLeap(2000), true);
  });
});

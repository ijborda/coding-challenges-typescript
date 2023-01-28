// 16+18=214

import { assert } from 'chai';

export function add (num1: number, num2: number): number {
  const len = Math.max(num1.toString().length, num2.toString().length);
  const arr1 = paddedArr(num1, len);
  const arr2 = paddedArr(num2, len);
  return +arr1.reduce((acc, a, i) => acc + (a + arr2[i]), '');
}

const paddedArr = (num: number, len: number): number[] => {
  return num.toString().padStart(len, '0').split('').map(Number);
};

describe('Silly addition', () => {
  it('Real addition', () => {
    assert.strictEqual(add(2, 11), 13);
    assert.strictEqual(add(0, 1), 1);
    assert.strictEqual(add(0, 0), 0);
  });

  it('Silly addition', () => {
    assert.strictEqual(add(16, 18), 214);
    assert.strictEqual(add(26, 39), 515);
    assert.strictEqual(add(122, 81), 1103);
  });

  it('Big addition', () => {
    assert.strictEqual(add(1222, 30277), 31499);
    assert.strictEqual(add(1236, 30977), 31111013);
    assert.strictEqual(add(38810, 1383), 391193);
    assert.strictEqual(add(49999, 49999), 818181818);
  });
});

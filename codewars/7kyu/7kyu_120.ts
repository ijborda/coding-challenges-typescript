// Numbers with this digit inside

import { assert } from 'chai';

export function numbersWithDigitInside (x: number, d: number): number[] {
  const arr = Array.from({ length: x }, (_, i) => i + 1).filter(num => num.toString().indexOf(d.toString()) !== -1);
  return arr.reduce((acc, a, i) => {
    if (i === 0) {
      acc[2] = 1;
    }
    acc[0] += 1;
    acc[1] += a;
    acc[2] *= a;
    return acc;
  }, [0, 0, 0]);
}

describe('Solution', function () {
  it('Basic Tests', function () {
    assert.deepEqual(numbersWithDigitInside(5, 6), [0, 0, 0]);
    assert.deepEqual(numbersWithDigitInside(1, 0), [0, 0, 0]);
    assert.deepEqual(numbersWithDigitInside(7, 6), [1, 6, 6]);
    assert.deepEqual(numbersWithDigitInside(11, 1), [3, 22, 110]);
    assert.deepEqual(numbersWithDigitInside(20, 0), [2, 30, 200]);
    assert.deepEqual(numbersWithDigitInside(44, 4), [9, 286, 5955146588160]);
  });
});

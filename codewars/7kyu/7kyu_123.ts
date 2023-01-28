// Extra Perfect Numbers (Special Numbers Series #7)

import { assert } from 'chai';

export function extraPerfect (n: number) {
  return Array.from({ length: n }, (_, i) => i + 1).filter(num => {
    const binary = num.toString(2);
    return +binary[0] + +binary[binary.length - 1] === 2;
  });
}

describe('Basic tests', () => {
  it('Testing for 3', () => assert.deepEqual(extraPerfect(3), [1, 3]));
  it('Testing for 5', () => assert.deepEqual(extraPerfect(5), [1, 3, 5]));
  it('Testing for 7', () => assert.deepEqual(extraPerfect(7), [1, 3, 5, 7]));
  it('Testing for 28', () => assert.deepEqual(extraPerfect(28), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]));
  it('Testing for 39', () =>
    assert.deepEqual(extraPerfect(39), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]));
});

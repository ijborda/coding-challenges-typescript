// Convert number to reversed array of digits

import { assert } from 'chai';

export const digitize = (n: number): number[] => {
  return n.toString().split('').reverse().map(Number);
};

describe('digitize', function () {
  it('Sample test', function () {
    assert.deepEqual(digitize(35231), [1, 3, 2, 5, 3]);
    assert.deepEqual(digitize(0), [0]);
  });
});

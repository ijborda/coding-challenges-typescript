// Double Char

import { assert } from 'chai';

export const reverseSeq = (n: number): number[] => {
  return Array.from({ length: n }, (_, i) => n - i);
};

describe('reverseSeq', function () {
  it('Sample Test', function () {
    assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
  });
});

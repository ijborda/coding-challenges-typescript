// Return Negative

import { assert } from 'chai';

export const makeNegative = (num: number): number => {
  return num <= 0 ? num : num * -1;
};

// Test
describe('makeNegative', function () {
  it('Sample tests', function () {
    assert.equal(makeNegative(42), -42);
  });
});

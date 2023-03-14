// Sum of Digits / Digital Root

import { assert } from 'chai';

export const digitalRoot = (n:number) :number => {
  if (n.toString().length === 1) {
    return n;
  }
  const sum = n.toString().split('').reduce((acc, a) => acc + +a, 0);
  return digitalRoot(sum);
};

// Test
describe('solution', () => {
  it('should work for fixed tests', () => {
    assert.equal(digitalRoot(16), 7);
    assert.equal(digitalRoot(456), 6);
  });
});

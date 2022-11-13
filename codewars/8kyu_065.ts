// Grasshopper - Summation

import { assert } from 'chai';

export const summation = (num:number) => {
  return Array.from({ length: num }, (_, i) => i + 1).reduce((acc, a) => acc + a, 0);
};

// Test
describe('summation', () => {
  it('basic tests', () => {
    assert.equal(summation(1), 1);
    assert.equal(summation(8), 36);
  });
});

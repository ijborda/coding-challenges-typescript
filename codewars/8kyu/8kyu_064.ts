// Filling an array (part 1)

import { expect } from 'chai';

export const arr = (n = 0): number[] => Array.from(new Array(n), (_, i) => i);

// Test
describe('Basic tests', () => {
  it('Should return an array', () => {
    expect(arr()).to.be.an('array');
  });

  it('Should return a blank array when called with no argument', () => {
    expect(arr()).to.deep.equal([]);
  });

  it('Should return 0 to 3 when called with 4', () => {
    expect(arr(4)).to.deep.equal([0, 1, 2, 3]);
  });
});

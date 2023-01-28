// Alphabet symmetry

import { assert } from 'chai';

export function isPowerOfTwo (n: number): boolean {
  if (n === 0) return false;
  const exp = Math.floor((Math.log(n) / Math.log(2)));
  return Math.pow(2, exp) === n;
}

describe('isPowerOfTwo', () => {
  it('2 is a power of 2', () => assert.equal(isPowerOfTwo(2), true));
  it('4096 is a power of 2', () => assert.equal(isPowerOfTwo(4096), true));
  it('5 is a power of 2', () => assert.equal(isPowerOfTwo(5), false));
});

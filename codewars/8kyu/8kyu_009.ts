// Is integer safe to use?

import { expect } from 'chai';

export function SafeInteger (n: number): boolean {
  return Number.isSafeInteger(n);
}

describe('SafeInteger', function () {
  it('should return false for 9007199254740992', () => {
    expect(SafeInteger(9007199254740992)).to.equal(false);
  });

  it('should return true for 9007199254740990', () => {
    expect(SafeInteger(9007199254740990)).to.equal(true);
  });
});

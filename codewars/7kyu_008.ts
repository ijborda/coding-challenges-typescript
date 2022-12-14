/* eslint-disable no-unused-expressions */
// You're a square!

import { expect } from 'chai';

export default function isSquare (n: number): boolean {
  return Number.isInteger(Math.sqrt(n));
}

describe('solution', function () {
  it('should work for some examples', function () {
    expect(isSquare(-1)).to.be.false;
    expect(isSquare(0)).to.be.true;
    expect(isSquare(3)).to.be.false;
    expect(isSquare(4)).to.be.true;
    expect(isSquare(25)).to.be.true;
    expect(isSquare(26)).to.be.false;
  });
});

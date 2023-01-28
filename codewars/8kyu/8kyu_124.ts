// Convert a Number to a String!

import { expect } from 'chai';

export function numberToString (num: number): string {
  return num.toString();
}

describe('numberToString', function () {
  it('should work correctly', () => {
    expect(numberToString(67)).to.equal('67');
  });
});

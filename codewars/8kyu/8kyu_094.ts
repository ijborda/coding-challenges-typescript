// Remove duplicates from list

import { expect } from 'chai';

export const distinct = (a: number[]): number[] => {
  return Array.from(new Set([...a]));
};

describe('solution', function () {
  it('should handle array with one number', () => {
    expect(distinct([1])).to.eql([1]);
  });
  it('should handle array with two numbers but no duplicates', () => {
    expect(distinct([1, 2])).to.eql([1, 2]);
  });
  it('should handle array with two numbers and a duplicate', () => {
    expect(distinct([1, 1, 2])).to.eql([1, 2]);
  });
});

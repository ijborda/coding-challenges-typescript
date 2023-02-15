// Simple Fun #88: Sort By Height

import { expect } from 'chai';

export function sortByHeight (list: number[]): number[] {
  const heights = list.filter(a => a !== -1).sort((a, b) => a - b);
  return list.map(a => a === -1 ? a : heights.shift() as number);
}

// Test
describe('Basic Tests', () => {
  it('should works for basic tests.', () => {
    expect(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])).to.deep.equal([-1, 150, 160, 170, -1, -1, 180, 190]);
    expect(sortByHeight([-1, -1, -1, -1, -1])).to.deep.equal([-1, -1, -1, -1, -1]);
    expect(sortByHeight([4, 2, 9, 11, 2, 16])).to.deep.equal([2, 2, 4, 9, 11, 16]);
  });
});

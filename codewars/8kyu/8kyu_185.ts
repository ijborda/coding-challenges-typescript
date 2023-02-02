// Composing squared strings

import { expect } from 'chai';

export function shuffledArray (shuffled: number[]): number[] {
  const sumIndex = shuffled.findIndex((a, i, arr) => a === arrRemoveIndex(arr, i).reduce((acc, a) => acc + a, 0));
  return arrRemoveIndex(shuffled, sumIndex).sort((a, b) => a - b);
}

const arrRemoveIndex = (arr: number[], index: number): number[] => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

describe('Basic Tests', () => {
  it('It should works for basic tests.', () => {
    expect(shuffledArray([1, 12, 3, 6, 2])).to.deep.equal([1, 2, 3, 6]);
    expect(shuffledArray([1, -3, -5, 7, 2])).to.deep.equal([-5, -3, 2, 7]);
    expect(shuffledArray([2, -1, 2, 2, -1])).to.deep.equal([-1, -1, 2, 2]);
    expect(shuffledArray([-3, -3])).to.deep.equal([-3]);
  });
});

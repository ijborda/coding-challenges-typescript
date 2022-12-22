// Flatten and sort an array

import { expect } from 'chai';

export function flattenAndSort (inputArray: number[][]): number[] {
  return inputArray.flat().sort((a, b) => a - b);
}

describe('flattenAndSort()', function () {
  it('should pass sample tests', function () {
    expect(flattenAndSort([])).to.deep.equal([]);
    expect(flattenAndSort([[], []])).to.deep.equal([]);
    expect(flattenAndSort([[], [1]])).to.deep.equal([1]);
    expect(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])).to.deep.equal([1, 2, 3, 4, 5, 6, 100]);
    // TODO Add your tests here
  });
});

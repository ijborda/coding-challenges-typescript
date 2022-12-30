// Over The Road

import { assert } from 'chai';

export function overTheRoad (address: number, n: number):number {
  return 2 * n - address + 1;
}

// const getOppositeOfLeftAddress = (oddAddress: number, maxIndex: number): number => {
//   const leftIndex = oddAddress / 2 + 0.5;
//   return 2 * (maxIndex - leftIndex + 1);
//   SIMPLIFY: return 2 * maxIndex - oddAddress + 1;
// };

// const getOppositeOfRightAddress = (evenAddress: number, maxIndex: number): number => {
//   const rightIndex = maxIndex - (evenAddress / 2) + 1;
//   return 2 * rightIndex - 1;
//   SIMPLIFY: return 2 * maxIndex - evenAddress + 1;
// };

describe('Basic Tests', function () {
  it('Basic Test Cases', function () {
    assert.equal(overTheRoad(1, 3), 6);
    assert.equal(overTheRoad(3, 3), 4);
    assert.equal(overTheRoad(2, 3), 5);
    assert.equal(overTheRoad(3, 5), 8);
    assert.equal(overTheRoad(7, 11), 16);
  });
});

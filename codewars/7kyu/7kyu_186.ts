// Doubleton number

import { assert } from 'chai';

export function doubleton (num: number): number {
  num += 1;
  while (!isDoubleton(num)) {
    num++;
  }
  return num;
}

const isDoubleton = (num: number): boolean => {
  return (new Set(num.toString().split(''))).size === 2;
};

// Test
describe('Fixed tests', () => {
  it(`Testing for number 120: received ${doubleton(120)}`, () => {
    assert.equal(doubleton(120), 121, 'Wrong result. It should be 121');
  });
  it(`Testing for number 1234: received ${doubleton(1234)}`, () => {
    assert.equal(doubleton(1234), 1311, 'Wrong result. It should be 1311');
  });
  it(`Testing for number 1: received ${doubleton(1)}`, () => {
    assert.equal(doubleton(1), 10, 'Wrong result. It should be 10');
  });
  it(`Testing for number 10: received ${doubleton(10)}`, () => {
    assert.equal(doubleton(10), 12, 'Wrong result. It should be 12');
  });
});

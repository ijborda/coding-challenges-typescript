// Equal Sides Of An Array

import { assert } from 'chai';

export function findEvenIndex (arr: number[]): number {
  return arr.findIndex((_, i, arr) => sum(arr.slice(0, i)) === sum(arr.slice(i + 1)));
}

const sum = (arr: number[]): number => {
  return arr.reduce((acc, a) => acc + a, 0);
};

// Test
describe('FindEvenIndex', () => {
  it('Tests', () => {
    assert.equal(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3, 'The array was: [1,2,3,4,3,2,1] \n');
    assert.equal(findEvenIndex([1, 100, 50, -51, 1, 1]), 1, 'The array was: [1,100,50,-51,1,1] \n');
    assert.equal(findEvenIndex([1, 2, 3, 4, 5, 6]), -1, 'The array was: [1,2,3,4,5,6] \n');
    assert.equal(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3, 'The array was: [20,10,30,10,10,15,35] \n');
  });
});

// Array plus array

import { assert } from 'chai';

export const arrayPlusArray = (arr1 : number[], arr2 : number[]) : number => {
  return [...arr1, ...arr2].reduce((acc, a) => acc + a);
};

describe('Tests', function () {
  it('Fixed tests', function () {
    assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
    assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
    assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
    assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
    assert.strictEqual(arrayPlusArray([0, 0, 0], [0, 0, 0]), 0);
    assert.strictEqual(arrayPlusArray([1, 2, 3, 4, 5, 6, 7], [10, 20, 30, 40, 50]), 178);
    assert.strictEqual(arrayPlusArray([-1, -2, -3, -4], [10]), 0);
  });
});

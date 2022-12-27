// Maximum Product

import { assert } from 'chai';

export function adjacentElementsProduct (arr: number[]): number {
  let maxProduct = Number.NEGATIVE_INFINITY;

  arr.forEach((a, i, arr) => {
    if (i === 0) {
      return;
    }
    const currentProduct = arr[i] * arr[i - 1];
    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
    }
  });

  return maxProduct;
}

describe('Fixed tests', function () {
  it('Testing for [5, 8]', () => assert.strictEqual(adjacentElementsProduct([5, 8]), 40));
  it('Testing for [1, 2, 3]', () => assert.strictEqual(adjacentElementsProduct([1, 2, 3]), 6));
  it('Testing for [1, 5, 10, 9]', () => assert.strictEqual(adjacentElementsProduct([1, 5, 10, 9]), 90));
  it('Testing for [4, 12, 3, 1, 5]', () => assert.strictEqual(adjacentElementsProduct([4, 12, 3, 1, 5]), 48));
  it('Testing for [5, 1, 2, 3, 1, 4]', () => assert.strictEqual(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6));
  it('Testing for [3, 6, -2, -5, 7, 3]', () => assert.strictEqual(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21));
  it('Testing for [9, 5, 10, 2, 24, -1, -48]', () =>
    assert.strictEqual(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50));
  it('Testing for [5, 6, -4, 2, 3, 2, -23]', () =>
    assert.strictEqual(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30));
  it('Testing for [-23, 4, -5, 99, -27, 329, -2, 7, -921]', () =>
    assert.strictEqual(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14));
  it('Testing for [5, 1, 2, 3, 1, 4]', () => assert.strictEqual(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6));
  it('Testing for [1, 0, 1, 0, 1000]', () => assert.strictEqual(adjacentElementsProduct([1, 0, 1, 0, 1000]), 0));
  it('Testing for [1, 2, 3, 0]', () => assert.strictEqual(adjacentElementsProduct([1, 2, 3, 0]), 6));
});

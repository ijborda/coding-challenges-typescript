// Ones and Zeros

import { assert } from 'chai';

export function binaryArrayToNumber (arr: number[]): number {
  return parseInt(arr.join(''), 2);
}

describe("One's and Zero's", () => {
  it('Example tests', () => {
    assert.strictEqual(binaryArrayToNumber([0, 0, 0, 1]), 1);
    assert.strictEqual(binaryArrayToNumber([0, 0, 1, 0]), 2);
    assert.strictEqual(binaryArrayToNumber([1, 1, 1, 1]), 15);
    assert.strictEqual(binaryArrayToNumber([0, 1, 1, 0]), 6);
  });
});

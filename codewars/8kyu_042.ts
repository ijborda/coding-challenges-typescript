// Count of positives / sum of negatives

import { assert } from 'chai';

export function countPositivesSumNegatives (input: any) {
  if (input && input.length > 0) {
    return input.reduce((ans: number[], a: number) => {
      if (a > 0) {
        ans[0] += 1;
      }
      if (a < 0) {
        ans[1] += a;
      }
      return ans;
    }, [0, 0]);
  }
  return [];
}

// Test
describe('countPositivesSumNegatives', () => {
  it('basic tests', () => {
    let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    let actual = countPositivesSumNegatives(testData);
    let expected = [10, -65];
    assert.deepEqual(actual, expected);

    testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    actual = countPositivesSumNegatives(testData);
    expected = [8, -50];
    assert.deepEqual(actual, expected);

    testData = null;
    actual = countPositivesSumNegatives(testData);
    expected = [];
    assert.deepEqual(actual, expected);

    testData = [];
    actual = countPositivesSumNegatives(testData);
    expected = [];
    assert.deepEqual(actual, expected);
  });
});

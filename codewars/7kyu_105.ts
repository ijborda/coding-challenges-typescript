// Minimum Steps (Array Series #6)

import { assert } from 'chai';

export function minimumSteps (nums: number[], value: number) {
  let numSteps = 0;
  let acc = 0;

  const sorted = nums.sort((a, b) => a - b);

  for (const num of sorted) {
    if (acc < value) {
      acc += num;
      numSteps += 1;
    } else {
      break;
    }
  }

  return numSteps - 1;
}

describe('Basic tests', () => {
  it('minimumSteps([4, 6, 3], 7)', () => assert.strictEqual(minimumSteps([4, 6, 3], 7), 1));
  it('minimumSteps([10, 9, 9, 8], 17)', () => assert.strictEqual(minimumSteps([10, 9, 9, 8], 17), 1));
  it('minimumSteps([8, 9, 10, 4, 2], 23)', () => assert.strictEqual(minimumSteps([8, 9, 10, 4, 2], 23), 3));
  it('minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)', () =>
    assert.strictEqual(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464), 8));
  it('minimumSteps([4, 6, 3], 2)', () => assert.strictEqual(minimumSteps([4, 6, 3], 2), 0));
});

// Tidy Number (Special Numbers Series #9)

import { assert } from 'chai';

export function tidyNumber (num: number): boolean {
  return num.toString().split('').every((a, i, arr) => i === 0 || a >= arr[i - 1]);
}

describe('Basic tests', () => {
  it('Testing for 12', () => assert.strictEqual(tidyNumber(12), true));
  it('Testing for 102', () => assert.strictEqual(tidyNumber(102), false));
  it('Testing for 9672', () => assert.strictEqual(tidyNumber(9672), false));
  it('Testing for 2789', () => assert.strictEqual(tidyNumber(2789), true));
  it('Testing for 2335', () => assert.strictEqual(tidyNumber(2335), true));
});

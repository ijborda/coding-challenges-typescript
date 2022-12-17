// Odd or Even?

import { assert } from 'chai';

export function oddOrEven (nums: number[]) {
  enum Response {
    ODD = 'odd',
    EVEN = 'even'
  }
  const sum = nums.reduce((acc, a) => acc + a, 0);
  return sum % 2 ? Response.ODD : Response.EVEN;
}

describe('Fixed tests', () => {
  it('Edge tests', () => {
    assert.equal(oddOrEven([0]), 'even');
    assert.equal(oddOrEven([1]), 'odd');
    assert.equal(oddOrEven([]), 'even');
  });

  it('Even tests', () => {
    assert.equal(oddOrEven([0, 1, 5]), 'even');
    assert.equal(oddOrEven([0, 1, 3]), 'even');
    assert.equal(oddOrEven([1023, 1, 2]), 'even');
  });

  it('Negative Even tests', () => {
    assert.equal(oddOrEven([0, -1, -5]), 'even');
    assert.equal(oddOrEven([0, -1, -3]), 'even');
    assert.equal(oddOrEven([-1023, 1, -2]), 'even');
  });

  it('Odd tests', () => {
    assert.equal(oddOrEven([0, 1, 2]), 'odd');
    assert.equal(oddOrEven([0, 1, 4]), 'odd');
    assert.equal(oddOrEven([1023, 1, 3]), 'odd');
  });

  it('Negative Odd tests', () => {
    assert.equal(oddOrEven([0, -1, 2]), 'odd');
    assert.equal(oddOrEven([0, 1, -4]), 'odd');
    assert.equal(oddOrEven([-1023, -1, 3]), 'odd');
  });
});

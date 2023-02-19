// Graceful Tipping

import { assert } from 'chai';

export function gracefulTipping (bill: number): number {
  return roundElegant(bill * 1.15);
}
const roundElegant = (num: number): number => {
  const numDigits = Math.floor(num).toString().length;
  const divisibleBy = Math.max(1, 5 * Math.pow(10, numDigits - 2));
  return Math.ceil(num / divisibleBy) * divisibleBy;
};

// Test
describe('graceful tipping', function () {
  it('given 7', function () {
    assert.equal(gracefulTipping(7), 9);
  });

  it('given 12', function () {
    assert.equal(gracefulTipping(12), 15);
  });

  it('given 86', function () {
    assert.equal(gracefulTipping(86), 100);
  });
});

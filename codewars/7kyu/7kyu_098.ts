// Unlucky Days

import { assert } from 'chai';

export function unluckyDays (year: number): number {
  return Array.from({ length: 12 }, (_, i) => i)
    .filter(month => hasUnlucky(year, month)).length;
}

const hasUnlucky = (year: number, month: number): boolean => {
  const FRIDAY = 5;
  return new Date(year, month, 13).getDay() === FRIDAY;
};

describe('Sample Tests', function () {
  it('Sample Tests', function () {
    assert.strictEqual(unluckyDays(2015), 3);
    assert.strictEqual(unluckyDays(1986), 1);
  });
});

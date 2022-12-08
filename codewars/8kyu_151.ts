// Cat years, Dog years

import { assert } from 'chai';

export function humanYearsCatYearsDogYears (humanYears: number): [number, number, number] {
  const catYears = humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + 4 * (humanYears - 2);
  const dogYears = humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + 5 * (humanYears - 2);
  return [humanYears, catYears, dogYears];
}

describe('Example Tests', function () {
  it('one', function () {
    assert.deepEqual(humanYearsCatYearsDogYears(1), [1, 15, 15]);
  });

  it('two', function () {
    assert.deepEqual(humanYearsCatYearsDogYears(2), [2, 24, 24]);
  });

  it('ten', function () {
    assert.deepEqual(humanYearsCatYearsDogYears(10), [10, 56, 64]);
  });
});

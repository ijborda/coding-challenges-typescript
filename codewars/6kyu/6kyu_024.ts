// Build Tower

import { assert } from 'chai';

export const towerBuilder = (nFloors: number): string[] => {
  return Array.from({ length: nFloors }).map((_, i) => {
    const spaces = ' '.repeat(nFloors - i - 1);
    const stars = '*'.repeat(2 * i + 1);
    return spaces + stars + spaces;
  });
};

// Test
describe('towerBuilder', function () {
  it('Basic Test', function () {
    assert.deepEqual(towerBuilder(1), ['*']);
    assert.deepEqual(towerBuilder(2), [' * ', '***']);
    assert.deepEqual(towerBuilder(3), ['  *  ', ' *** ', '*****']);
  });
});

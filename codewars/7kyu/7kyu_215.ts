// Equalize the array!

import { assert } from 'chai';

export function equalize (array:number[]): string[] {
  const ref = array[0];
  return array.map(a => a - ref < 0 ? `${a - ref}` : `+${a - ref}`);
}

// Test
describe('solution', function () {
  it('basicTests', function () {
    assert.deepEqual(equalize([20, 30, 35, 10]), (['+0', '+10', '+15', '-10']));
    assert.deepEqual(equalize([]), ([]));
    assert.deepEqual(equalize([10, 12, 24, 50, 0, 15, 20]), (['+0', '+2', '+14', '+40', '-10', '+5', '+10']));
  });
});

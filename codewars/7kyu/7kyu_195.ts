// Hero's root

import { assert } from 'chai';

export function polydivisible (x: number): boolean {
  for (let i = 1; i <= x.toString().length; i++) {
    if (+x.toString().slice(0, i) % i !== 0) {
      return false;
    }
  }
  return true;
}

// Test
describe('Example Cases', (): void => {
  it('sample test', (): void => {
    assert.strictEqual(polydivisible(1232), true);
    assert.strictEqual(polydivisible(123220), false);
  });
});

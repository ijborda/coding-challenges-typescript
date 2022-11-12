// Will there be enough space?

import { assert } from 'chai';

export function enough (cap: number, on: number, wait: number): number {
  return Math.max(on + wait - cap, 0);
}

// Test
describe('Tests: ', () => {
  it('Example Tests: ', () => {
    assert.equal(enough(10, 5, 5), 0);
    assert.equal(enough(100, 60, 50), 10);
    assert.equal(enough(50, 15, 10), 0);
  });
});

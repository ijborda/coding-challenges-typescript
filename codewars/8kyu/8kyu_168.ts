// Return to Sanity

import { assert } from 'chai';

export function mystery (): object {
  return { sanity: 'Hello' };
}

// Test
describe('example', function () {
  it('test', function () {
    assert.deepEqual(mystery(), { sanity: 'Hello' });
  });
});

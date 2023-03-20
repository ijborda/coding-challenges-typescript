// Count the smiley faces!

import { assert } from 'chai';

export function countSmileys (arr: string[]): number {
  return arr.filter(a => /^[:;][-~]{0,1}[)D]$/g.test(a)).length;
}

// Test
describe('Basic testing', function () {
  it('examples', () => {
    assert.equal(countSmileys([]), 0);
    assert.equal(countSmileys([':D', ':~)', ';~D', ':)']), 4);
    assert.equal(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
    assert.equal(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
  });
});

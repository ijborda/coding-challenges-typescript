// How many lightsabers do you own?

import { assert } from 'chai';

export function howManyLightsabersDoYouOwn (name?: string): number {
  return (name || '').toLowerCase() === 'zach' ? 18 : 0;
}

// Test
describe('How many light sabers?', function () {
  it('Basic tests', function () {
    assert.equal(howManyLightsabersDoYouOwn('Zach'), 18);
    assert.equal(howManyLightsabersDoYouOwn('Adam'), 0);
    assert.equal(howManyLightsabersDoYouOwn(), 0);
  });
});

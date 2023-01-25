// Help Suzuki rake his garden!

import { assert } from 'chai';

export function rakeGarden (garden: string): string {
  const allowed = ['rock', 'gravel'];
  return garden.split(' ').map(a => !allowed.includes(a) ? 'gravel' : a).join(' ');
}

describe('rakeGarden', function () {
  it('should work for sample (fixed) tests', function () {
    const garden1 = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel';
    assert.strictEqual(rakeGarden(garden1), 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel');
    const garden2 = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel';
    assert.strictEqual(rakeGarden(garden2), 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel');
  });
});

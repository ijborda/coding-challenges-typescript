// The Feast of Many Beasts

import { assert } from 'chai';

export function feast (beast:string, dish:string):boolean {
  return beast[0] === dish[0] && beast.split('').splice(-1)[0] === dish.split('').splice(-1)[0];
}

// Test
describe('feast', () => {
  it('basic tests', () => {
    assert.equal(feast('great blue heron', 'garlic naan'), true);
    assert.equal(feast('chickadee', 'chocolate cake'), true);
    assert.equal(feast('brown bear', 'bear claw'), false);
  });
});

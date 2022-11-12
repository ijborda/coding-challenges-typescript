// Are You Playing Banjo?

import { assert } from 'chai';

export function areYouPlayingBanjo (name: string): string {
  enum Banjo {
    PLAYS = 'plays banjo',
    NOTPLAY = 'does not play banjo'
  }
  return `${name} ${name.toLowerCase().startsWith('r') ? Banjo.PLAYS : Banjo.NOTPLAY}`;
}

// Test
describe('Are you playing banjo?', () => {
  it('Fixed test', () => {
    assert.strictEqual(areYouPlayingBanjo('Adam'), 'Adam does not play banjo');
    assert.strictEqual(areYouPlayingBanjo('Paul'), 'Paul does not play banjo');
    assert.strictEqual(areYouPlayingBanjo('Ringo'), 'Ringo plays banjo');
    assert.strictEqual(areYouPlayingBanjo('bravo'), 'bravo does not play banjo');
    assert.strictEqual(areYouPlayingBanjo('rolf'), 'rolf plays banjo');
  });
});

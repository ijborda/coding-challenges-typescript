// The Office VI - Sabbatical

import { assert } from 'chai';

export function sabb (s: string, val: number, happiness: number): string {
  enum Sabbatical {
    APPROVED = 'Sabbatical! Boom!',
    DENIED = 'Back to your desk, boy.'
  }
  const scount = s.split('').filter(a => 'sabbatical'.includes(a)).length;
  return scount + val + happiness > 22 ? Sabbatical.APPROVED : Sabbatical.DENIED;
}

describe('The Office VI - Sabbatical', () => {
  it('Fixed tests', () => {
    assert.strictEqual(sabb('Can I have a sabbatical?', 5, 5), 'Sabbatical! Boom!');
    assert.strictEqual(sabb('Why are you shouting?', 7, 2), 'Back to your desk, boy.');
    assert.strictEqual(sabb('What do you mean I cant learn to code??', 8, 9), 'Sabbatical! Boom!');
    assert.strictEqual(sabb('Please calm down', 9, 1), 'Back to your desk, boy.');
    assert.strictEqual(sabb('I can?! Nice. FaC..Im coming :D', 9, 9), 'Sabbatical! Boom!');
  });
});

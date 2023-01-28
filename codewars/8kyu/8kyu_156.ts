// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

import { assert } from 'chai';

export function remove (s: string): string {
  return s.replace(/!/g, '') + '!';
}

describe('Basic Tests', function () {
  it('It should works for basic tests', function () {
    assert.strictEqual(remove('Hi!'), 'Hi!');
    assert.strictEqual(remove('Hi!!!'), 'Hi!');
    assert.strictEqual(remove('!Hi'), 'Hi!');
    assert.strictEqual(remove('!Hi!'), 'Hi!');
    assert.strictEqual(remove('Hi! Hi!'), 'Hi Hi!');
    assert.strictEqual(remove('Hi'), 'Hi!');
  });
});

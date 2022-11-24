// Exclamation marks series #1: Remove an exclamation mark from the end of string

import { assert } from 'chai';

export function remove (s: string): string {
  return s.replace(/!$/, '');
}

describe('Basic Tests', function () {
  it('It should works for basic tests', function () {
    assert.strictEqual(remove('Hi!'), 'Hi');
    assert.strictEqual(remove('Hi!!!'), 'Hi!!');
    assert.strictEqual(remove('!Hi'), '!Hi');
    assert.strictEqual(remove('!Hi!'), '!Hi');
    assert.strictEqual(remove('Hi! Hi!'), 'Hi! Hi');
    assert.strictEqual(remove('Hi'), 'Hi');
  });
});

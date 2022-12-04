// Is this my tail?

import { assert } from 'chai';

export function correctTail (body: string, tail: string): boolean {
  return body[body.length - 1] === (tail || '')[0];
  // return body.endsWith(tail);
}

describe('Is this my tail?', () => {
  it('Fixed tests', () => {
    assert.strictEqual(correctTail('Fox', 'x'), true);
    assert.strictEqual(correctTail('Rhino', 'o'), true);
    assert.strictEqual(correctTail('Meerkat', 't'), true);
    assert.strictEqual(correctTail('Emu', 't'), false);
    assert.strictEqual(correctTail('Badger', 's'), false);
    assert.strictEqual(correctTail('Giraffe', 'd'), false);
  });
});

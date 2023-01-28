// Keep up the hoop

import { assert } from 'chai';

export function hoopCount (n: number): string {
  enum Reply {
    GREAT = 'Great, now move on to tricks',
    KEEP = 'Keep at it until you get it'
  }
  return n >= 10 ? Reply.GREAT : Reply.KEEP;
}

// Test
describe('Keep up the hoop', () => {
  it('Fixed tests', () => {
    assert.strictEqual(hoopCount(6), 'Keep at it until you get it');
    assert.strictEqual(hoopCount(10), 'Great, now move on to tricks');
    assert.strictEqual(hoopCount(22), 'Great, now move on to tricks');
  });
});

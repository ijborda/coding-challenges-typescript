// Handshake problem

import { assert } from 'chai';

export function getParticipants (handshakes: number): number {
  return handshakes ? Math.ceil((1 + Math.sqrt(1 + 8 * handshakes)) / 2) : 0;
}

// Test
describe('Handshake problem', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(getParticipants(0), 0);
    assert.strictEqual(getParticipants(1), 2);
    assert.strictEqual(getParticipants(3), 3);
    assert.strictEqual(getParticipants(6), 4);
    assert.strictEqual(getParticipants(7), 5);
  });
});

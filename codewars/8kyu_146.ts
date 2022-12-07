// Correct the mistakes of the character recognition software

import { assert } from 'chai';

export function correct (s: string): string {
  return s.replace(/5/g, 'S')
    .replace(/0/g, 'O')
    .replace(/1/g, 'I');
}

describe('Tests', () => {
  it('test', () => {
    assert.strictEqual(correct('L0ND0N'), 'LONDON');
    assert.strictEqual(correct('DUBL1N'), 'DUBLIN');
    assert.strictEqual(correct('51NGAP0RE'), 'SINGAPORE');
    assert.strictEqual(correct('BUDAPE5T'), 'BUDAPEST');
    assert.strictEqual(correct('PAR15'), 'PARIS');
  });
});

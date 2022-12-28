// Build a square

import { assert } from 'chai';

export function generateShape (length: number): string {
  return Array.from({ length }).map(() => '+'.repeat(length)).join('\n');
}

describe('Sample Test Cases', function () {
  it('Should return a string', function () {
    assert.strictEqual(generateShape(1), '+');
    assert.strictEqual(generateShape(3), '+++\n+++\n+++');
    assert.strictEqual(generateShape(8), '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++');
  });
});

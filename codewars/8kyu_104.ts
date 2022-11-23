// Beginner Series #1 School Paperwork

import { assert } from 'chai';

export function paperwork (n: number, m :number): number {
  if (n < 0 || m < 0) return 0;
  return n * m;
}

describe('School paperwork', function () {
  it('Fixed tests', () => {
    assert.strictEqual(paperwork(5, 5), 25, 'Failed at paperwork(5, 5)');
    assert.strictEqual(paperwork(5, -5), 0, 'Failed at paperwork(5, -5)');
    assert.strictEqual(paperwork(-5, -5), 0, 'Failed at paperwork(-5, -5)');
    assert.strictEqual(paperwork(-5, 5), 0, 'Failed at paperwork(-5, 5)');
    assert.strictEqual(paperwork(5, 0), 0, 'Failed at paperwork(5, 0)');
  });
});

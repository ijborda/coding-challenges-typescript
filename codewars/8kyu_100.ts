// Grasshopper - If/else syntax debug

import { assert } from 'chai';

export function checkAlive (health: number): boolean {
  return health > 0;
}

describe('Grasshopper - If/else syntax debug', function () {
  it('Fixed tests', function () {
    assert.strictEqual(checkAlive(5), true);
    assert.strictEqual(checkAlive(0), false);
  });
});

// I Will Take the Biggest One and Nothing Else.

import { assert } from 'chai';

export function maxIntChain (n: number): number {
  if (n < 5) {
    return -1;
  }
  const i = Math.floor(n / 2) - (n % 2 ? 0 : 1);
  return (i * (n - i));
}

// Test
describe('Fixed Tests', function () {
  it('Example Test Cases', function () {
    assert.strictEqual(maxIntChain(6), 8, 'Incorrect Result');
    assert.strictEqual(maxIntChain(10), 24, 'Incorrect Result');
    assert.strictEqual(maxIntChain(26), 168, 'Incorrect Result');
    assert.strictEqual(maxIntChain(32), 255, 'Incorrect Result');
    assert.strictEqual(maxIntChain(36), 323, 'Incorrect Result');
    assert.strictEqual(maxIntChain(39), 380, 'Incorrect Result');
  });
  it('Prime Integers', function () {
    assert.strictEqual(maxIntChain(5), 6, 'Incorrect Result');
    assert.strictEqual(maxIntChain(7), 12, 'Incorrect Result');
    assert.strictEqual(maxIntChain(11), 30, 'Incorrect Result');
    assert.strictEqual(maxIntChain(13), 42, 'Incorrect Result');
    assert.strictEqual(maxIntChain(17), 72, 'Incorrect Result');
  });
  it('Starting integer less than 5', function () {
    assert.strictEqual(maxIntChain(1), -1, 'Incorrect Result');
    assert.strictEqual(maxIntChain(2), -1, 'Incorrect Result');
    assert.strictEqual(maxIntChain(3), -1, 'Incorrect Result');
    assert.strictEqual(maxIntChain(4), -1, 'Incorrect Result');
  });
});

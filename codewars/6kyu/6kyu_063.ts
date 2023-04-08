// N-th Fibonacci

import { assert } from 'chai';

export function nthFibo (n: number): number {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
}

// Test
describe('Tests', function () {
  it('Fixed tests', function () {
    assert.strictEqual(nthFibo(1), 0, 'Incorrect answer for n=1');
    assert.strictEqual(nthFibo(2), 1, 'Incorrect answer for n=2');
    assert.strictEqual(nthFibo(3), 1, 'Incorrect answer for n=3');
    assert.strictEqual(nthFibo(4), 2, 'Incorrect answer for n=4');
  });
});

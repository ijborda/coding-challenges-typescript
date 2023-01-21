// Collatz Conjecture Length

import { assert } from 'chai';

export function collatz (n:number):number {
  let step = 1;

  while (n !== 1) {
    if (n % 2) {
      n = n * 3 + 1;
    } else {
      n = n / 2;
    }
    step++;
  }

  return step;
}

describe('solution', function () {
  it('Basic Tests', function () {
    assert.strictEqual(collatz(20), 8);
    assert.strictEqual(collatz(15), 18);
  });
});

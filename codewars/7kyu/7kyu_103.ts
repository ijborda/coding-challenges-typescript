// Evens and Odds

import { assert } from 'chai';

export function evensAndOdds (n: number): string {
  const isBinary = n % 2 === 0;
  return isBinary ? n.toString(2) : n.toString(16);
}

describe('Solution', function () {
  it('Basic Tests', function () {
    assert.strictEqual(evensAndOdds(2), '10');
    assert.strictEqual(evensAndOdds(0), '0');
    assert.strictEqual(evensAndOdds(13), 'd');
    assert.strictEqual(evensAndOdds(47), '2f');
    assert.strictEqual(evensAndOdds(12800), '11001000000000');
    assert.strictEqual(evensAndOdds(8172381723), '1e71ca61b');
  });
});

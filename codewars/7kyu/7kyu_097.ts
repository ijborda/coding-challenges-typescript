// Longest vowel chain

import { assert } from 'chai';

export function solve (s: string): number {
  return Math.max(...(s.match(/[aeiou]+/g) || []).map(a => a.length));
}

describe('Longest vowel chain', function () {
  it('Basic tests', function () {
    assert.strictEqual(solve('codewarriors'), 2);
    assert.strictEqual(solve('suoidea'), 3);
    assert.strictEqual(solve('ultrarevolutionariees'), 3);
    assert.strictEqual(solve('strengthlessnesses'), 1);
    assert.strictEqual(solve('cuboideonavicuare'), 2);
    assert.strictEqual(solve('chrononhotonthuooaos'), 5);
    assert.strictEqual(solve('iiihoovaeaaaoougjyaw'), 8);
  });
});

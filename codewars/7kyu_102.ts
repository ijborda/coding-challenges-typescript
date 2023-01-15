// Numbers in strings

import { assert } from 'chai';

export function solve (s: string) {
  return Math.max(...(s.match(/[\d]+/g) || []).map(Number));
}

describe('Fixed tests', () => {
  it('Testing for gh12cdy695m1', () => assert.strictEqual(solve('gh12cdy695m1'), 695));
  it('Testing for 2ti9iei7qhr5', () => assert.strictEqual(solve('2ti9iei7qhr5'), 9));
  it('Testing for vih61w8oohj5', () => assert.strictEqual(solve('vih61w8oohj5'), 61));
  it('Testing for f7g42g16hcu5', () => assert.strictEqual(solve('f7g42g16hcu5'), 42));
  it('Testing for lu1j8qbbb85', () => assert.strictEqual(solve('lu1j8qbbb85'), 85));
});

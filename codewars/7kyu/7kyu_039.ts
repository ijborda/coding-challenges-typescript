// Fix string case

import { assert } from 'chai';

export function solve (s: string): string {
  const numUpper = s.split('').reduce((acc, a) => a === a.toUpperCase() ? acc + 1 : acc, 0);
  return numUpper > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}

describe('Basic tests', function () {
  it('Testing for code', () => assert.strictEqual(solve('code'), 'code'));
  it('Testing for CODe', () => assert.strictEqual(solve('CODe'), 'CODE'));
  it('Testing for COde', () => assert.strictEqual(solve('COde'), 'code'));
  it('Testing for Code', () => assert.strictEqual(solve('Code'), 'code'));
});

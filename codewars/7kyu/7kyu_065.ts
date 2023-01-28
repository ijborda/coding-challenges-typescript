// Sum of Cubes

import { assert } from 'chai';

export function sumCubes (n: number): number {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, a) => acc + Math.pow(a, 3), 0);
}

describe('Fixed tests', () => {
  it('Testing for 1', () => assert.strictEqual(sumCubes(1), 1));
  it('Testing for 2', () => assert.strictEqual(sumCubes(2), 9));
  it('Testing for 3', () => assert.strictEqual(sumCubes(3), 36));
  it('Testing for 4', () => assert.strictEqual(sumCubes(4), 100));
  it('Testing for 10', () => assert.strictEqual(sumCubes(10), 3025));
  it('Testing for 123', () => assert.strictEqual(sumCubes(123), 58155876));
});

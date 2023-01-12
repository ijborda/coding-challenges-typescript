// Complete The Pattern #1

import { assert } from 'chai';

export function pattern (n: number): string {
  const output = [];
  for (let i = 0; i < n; i++) {
    const num = i + 1;
    output.push((num).toString().repeat(num));
  }
  return output.join('\n');
}

describe('Sample tests', function () {
  const testCases: [number, string][] = [
    [1, '1'],
    [2, '1\n22'],
    [5, '1\n22\n333\n4444\n55555'],
    [-1, '']
  ];
  for (const [n, expected] of testCases) {
    it(`test <code>n=${n}</code>`, function () {
      assert.strictEqual(pattern(n), expected);
    });
  }
});

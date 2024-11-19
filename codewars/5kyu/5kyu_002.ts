// Card Game - Unfinished

import { assert } from 'chai';

export function cardGame (n : bigint) : bigint {
  let collected = 0n;
  let i = 0;
  while (n > 0) {
    // console.log('>>> round');
    // Player 1 collected
    const p1 = !isGetOneStrat(n, i) && isEven(n) ? n / 2n : 1n;
    // console.log({ p1 });
    n = n - p1;
    // Player 2 collected
    const p2 = isEven(n) ? n / 2n : 1n;
    n = n - p2;
    // console.log({ p2 });
    // Collected
    collected += p1;
    // console.log({ n });
    i++;
  }
  return collected;
}

const isGetOneStrat = (n: bigint, i: number): boolean => (i === 0) && (n !== 4n) && (n % 4n === 0n);

const isEven = (n: bigint): boolean => n % 2n === 0n;

// Test

describe('Fixed Tests', function () {
  const entries : [bigint, bigint][] = [
    [10n, 8n],
    [4n, 3n],
    [5n, 2n],
    [12n, 9n],
    [100000000000n, 99999999950n]
  ];

  it('Sample Tests', function () {
    for (const [n, expected] of entries) {
      const actual = cardGame(n);
      const msg = `For n = ${n} `;
      assert.strictEqual(actual, expected, msg);
    }
  });
});

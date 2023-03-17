// Playing with digits

import { assert } from 'chai';

export class G964 {
  public static digPow = (n: number, p: number): number => {
    const k = n.toString().split('').reduce((acc, a, i) => acc + Math.pow(+a, p + i), 0) / n;
    return Number.isInteger(k) ? k : -1;
  };
}

// Test
function dotest (n: number, p: number, expected: number) {
  assert.equal(G964.digPow(n, p), expected, 'Incorrect answer for n=' + n + ', p=' + p);
}

describe('Fixed Tests', function () {
  it('digPow', function () {
    dotest(695, 2, 2);
    dotest(89, 1, 1);
    dotest(92, 1, -1);
    dotest(114, 3, 9);
  });
});

// Count the Digit

import { assert } from 'chai';

export class G964 {
  public static nbDig (n: number, d: number): number {
    const arr = Array.from({ length: n + 1 }, (_, i) => Math.pow(i, 2));
    let count = 0;
    arr.forEach(a => {
      const regex = new RegExp(`${d}`, 'g');
      count += (a.toString().match(regex) || []).length;
    });

    return count;
  }
}

function testing (actual: number, expected: number) {
  assert.equal(actual, expected);
}

describe('Fixed Tests', function () {
  it('Basic tests nbDig', function () {
    testing(G964.nbDig(5750, 0), 4700);
    testing(G964.nbDig(11011, 2), 9481);
    testing(G964.nbDig(12224, 8), 7733);
    testing(G964.nbDig(11549, 1), 11905);
  });
});

// Training JS #7: if..else and ternary operator

import { assert } from 'chai';

export function saleHotdogs (n: number): number {
  let price: number;

  if (n < 5) {
    price = 100;
  } else if (n >= 5 && n < 10) {
    price = 95;
  } else {
    price = 90;
  }

  return n * price;
}

describe('solution', function () {
  it('sample tests', function () {
    assert.strictEqual(saleHotdogs(1), 100);
    assert.strictEqual(saleHotdogs(4), 400);
    assert.strictEqual(saleHotdogs(5), 475);
    assert.strictEqual(saleHotdogs(9), 855);
    assert.strictEqual(saleHotdogs(10), 900);
    assert.strictEqual(saleHotdogs(100), 9000);
  });
});

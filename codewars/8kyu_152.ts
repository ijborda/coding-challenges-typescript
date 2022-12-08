// USD => CNY

import { assert } from 'chai';

export function usdcny (usd: number): string {
  const yuan = usd * 6.75;
  return `${yuan.toFixed(2)} Chinese Yuan`;
}

describe('should work with test cases', function () {
  it('simple', function () {
    assert.strictEqual(usdcny(15), '101.25 Chinese Yuan');
  });
  it('simple', function () {
    assert.strictEqual(usdcny(465), '3138.75 Chinese Yuan');
  });
  it('correct decimal places', function () {
    assert.strictEqual(usdcny(9952), '67176.00 Chinese Yuan');
  });
});

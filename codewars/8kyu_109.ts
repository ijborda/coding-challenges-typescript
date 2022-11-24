// Transportation on vacation

import { assert } from 'chai';

export function rentalCarCost (d: number): number {
  const discount = d >= 7 ? 50 : d >= 3 ? 20 : 0;
  return d * 40 - discount;
}

describe('Regular Tests:', () => {
  it('Should work for under 3 days:', () => {
    assert.strictEqual(rentalCarCost(1), 40);
    assert.strictEqual(rentalCarCost(2), 80);
  });

  it('Should work for under 7 days:', () => {
    assert.strictEqual(rentalCarCost(3), 100);
    assert.strictEqual(rentalCarCost(4), 140);
    assert.strictEqual(rentalCarCost(5), 180);
    assert.strictEqual(rentalCarCost(6), 220);
  });

  it('Should work for 7 or more days:', () => {
    assert.strictEqual(rentalCarCost(7), 230);
    assert.strictEqual(rentalCarCost(8), 270);
    assert.strictEqual(rentalCarCost(9), 310);
    assert.strictEqual(rentalCarCost(10), 350);
  });
});

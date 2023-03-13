// Price of Mangoes

import { assert } from 'chai';
import * as chai from 'chai';

export function mango (quantity: number, price: number): number {
  return price * (quantity - Math.floor(quantity / 3));
}

// Test
chai.config.truncateThreshold = 0;
describe('Sample Tests', () => {
  it('Should pass sample tests', () => {
    assert.strictEqual(mango(3, 3), 6);
    assert.strictEqual(mango(9, 5), 30);
  });
});

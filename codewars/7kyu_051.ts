// Deodorant Evaporator

import { assert } from 'chai';

export function evaporator (content: number, evapPerDay: number, threshold: number): number {
  return Math.ceil(Math.log(threshold / 100) / Math.log((100 - evapPerDay) / 100));
}

describe('Fixed Tests evaporator', function () {
  it('Basic tests', function () {
    assert.strictEqual(evaporator(10, 10, 10), 22);
    assert.strictEqual(evaporator(10, 10, 5), 29);
  });
});

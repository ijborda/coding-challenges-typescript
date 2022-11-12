// Twice as old

import { assert } from 'chai';

export function twiceAsOld (dadYearsOld: number, sonYearsOld: number): number {
  return Math.abs(sonYearsOld * 2 - dadYearsOld);
}

// Test
describe('Basic tests', () => {
  it("Testing for dad's age: 36 and son's age: 7", () => {
    assert.strictEqual(twiceAsOld(36, 7), 22);
  });

  it("Testing for dad's age: 55 and son's age: 30", () => {
    assert.strictEqual(twiceAsOld(55, 30), 5);
  });

  it("Testing for dad's age: 42 and son's age: 21", () => {
    assert.strictEqual(twiceAsOld(42, 21), 0);
  });

  it("Testing for dad's age: 22 and son's age: 1", () => {
    assert.strictEqual(twiceAsOld(22, 1), 20);
  });

  it("Testing for dad's age: 29 and son's age: 0", () => {
    assert.strictEqual(twiceAsOld(29, 0), 29);
  });
});

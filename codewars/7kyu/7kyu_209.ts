// Closure Counter

import { assert } from 'chai';

export function counter (count = 1) {
  return () => count++;
}

// Test
describe('Testing counter', function () {
  it('should return a function', function () {
    assert.strictEqual(typeof (counter()), 'function');
  });
  it('should return 1 when the returned function is invoked', function () {
    assert.strictEqual(counter()(), 1);
  });
  it('should increment and return the number each time the function is invoked', function () {
    const counterFunction = counter();
    assert.strictEqual(counterFunction(), 1);
    assert.strictEqual(counterFunction(), 2);
  });
  it('should have two different accumulators if two counters are created', function () {
    const counterOne = counter();
    const counterTwo = counter();
    assert.strictEqual(counterOne(), 1);
    assert.strictEqual(counterOne(), 2);
    assert.strictEqual(counterTwo(), 1);
    assert.strictEqual(counterTwo(), 2);
  });
});

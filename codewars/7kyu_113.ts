// Simple Fun #2: Circle of Numbers

import { assert } from 'chai';

export function circleOfNumbers (n: number, firstNumber: number) {
  return (firstNumber + n / 2) % n;
}

describe('basic tests', function () {
  it('circleOfNumbers(10, 2)', () => assert.strictEqual(circleOfNumbers(10, 2), 7));
  it('circleOfNumbers(10, 7)', () => assert.strictEqual(circleOfNumbers(10, 7), 2));
  it('circleOfNumbers(4, 1)', () => assert.strictEqual(circleOfNumbers(4, 1), 3));
  it('circleOfNumbers(6, 3)', () => assert.strictEqual(circleOfNumbers(6, 3), 0));
  it('circleOfNumbers(20, 0)', () => assert.strictEqual(circleOfNumbers(20, 0), 10));
});

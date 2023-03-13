// Multiples of 3 or 5

import { assert } from 'chai';

export class Challenge {
  static solution (number: number) {
    return Array.from({ length: number - 1 }, (_, i) => i + 1)
      .reduce((acc, a) => acc + (a % 3 && a % 5 ? 0 : a), 0);
  }
}

// Test
function test (num: number, expected: number) {
  assert.strictEqual(Challenge.solution(num), expected);
}
describe('solution', function () {
  it('should handle basic tests', function () {
    test(10, 23);
  });
});

// Selective fear of numbers

import { assert } from 'chai';

export function amIAfraid (day: string, num: number): boolean {
  switch (day) {
    case 'Monday':
      return num === 12;
    case 'Tuesday':
      return num > 95;
    case 'Wednesday':
      return num === 34;
    case 'Thursday':
      return num === 0;
    case 'Friday':
      return num % 2 === 0;
    case 'Saturday':
      return num === 56;
    case 'Sunday':
      return Math.abs(num) === 666;
    default:
      throw new Error('Day not found.');
  }
}

// Test
describe('example', function () {
  it('test', function () {
    assert.equal(amIAfraid('Monday', 13), false, 'Should return false');
    assert.equal(amIAfraid('Sunday', -666), true, 'Should return true');
    assert.equal(amIAfraid('Tuesday', 2), false, 'Should return false');
    assert.equal(amIAfraid('Tuesday', 965), true, 'Should return true');
    assert.equal(amIAfraid('Friday', 2), true, 'Should return true');
  });
});

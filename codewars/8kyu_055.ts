// Thinkful - Logic Drills: Traffic light

import { assert } from 'chai';

export function updateLight (current: string): string {
  const traffic = ['green', 'yellow', 'red'];
  const nextIndex = traffic.indexOf(current);
  return traffic[nextIndex + 1] || traffic[0];
}

// Test
describe('Thinkful - Logic Drills: Traffic light', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(updateLight('green'), 'yellow');
    assert.strictEqual(updateLight('yellow'), 'red');
    assert.strictEqual(updateLight('red'), 'green');
  });
});

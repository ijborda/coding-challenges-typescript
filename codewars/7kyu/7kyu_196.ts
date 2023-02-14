// Collision Detection

import { assert } from 'chai';

export function collision (x1: number, y1: number, r1: number, x2: number, y2: number, r2: number):boolean {
  const d = Math.hypot(x1 - x2, y1 - y2);
  return d <= Math.abs(r1 - r2) || d <= r1 + r2;
}

// Explanation:
// if (d <= Math.abs(r1 - r2)) {
//   // Circle is inside the other
//   return true;
// } else if (d < r1 + r2) {
//   // Circle intersect each other
//   return true;
// } else if (d === r1 + r2) {
//   // Circle touch each other
//   return true;
// } else {
//   // Circle do not touch each other
//   return false;
// }

// Test
describe('Solution', function () {
  it('Collisions', function () {
    assert.strictEqual(collision(1, 1, 1, 1.1, 1.1, 0.1), true, 'Expected true.');
    assert.strictEqual(collision(-1, 1, 10, -10.1, 1.1, 1), true, 'Expected true.');
    assert.strictEqual(collision(-5, 5, 5.0001, 5, -5, 5 * Math.sqrt(5)), true, 'Expected true.');
  });
  it('Not Collisions', function () {
    assert.strictEqual(collision(1, 1, 0.01, 1, 1.1, 0.01), false, 'Expected false.');
    assert.strictEqual(collision(-1, 1, 6, -10.1, 1.1, 1), false, 'Expected false.');
    assert.strictEqual(collision(-5, 5, 5.0001, 5, -5, 4 * Math.sqrt(5)), false, 'Expected false.');
  });
});

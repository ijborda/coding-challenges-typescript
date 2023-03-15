// Take a Ten Minutes Walk

import { assert } from 'chai';

export function isValidWalk (walk: string[]) {
  if (walk.length !== 10) {
    return false;
  }

  const coords = walk.reduce((acc, a) => {
    switch (a) {
      case 'n': acc[1] += 1; break;
      case 's': acc[1] -= 1; break;
      case 'e': acc[0] += 1; break;
      case 'w': acc[0] -= 1; break;
      default: break;
    }
    return acc;
  }, [0, 0]);

  return coords[0] === 0 && coords[1] === 0;
}

// Test
describe('example', function () {
  it('test', function () {
    assert.equal(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), true);
    assert.equal(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), false);
    assert.equal(isValidWalk(['w']), false);
    assert.equal(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), false);
  });
});

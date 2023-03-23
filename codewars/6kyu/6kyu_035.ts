// Rectangle into Squares

import { assert } from 'chai';

export const sqInRect = (l: number, w: number): null|number[] => {
  const squares: number[] = [];
  while (true) {
    if (l < w) {
      squares.push(l);
      w -= l;
    } else if (w < l) {
      squares.push(w);
      l -= w;
    } else {
      squares.push(w);
      break;
    }
  }
  return squares.length === 1 ? null : squares;
};

// Test
function testing (l: number, w: number, expected: number[]|null) {
  assert.deepEqual(sqInRect(l, w), expected);
}
describe('Fixed Tests sqInRect', function () {
  it('Basic tests', function () {
    testing(5, 5, null);
    testing(5, 3, [3, 2, 1, 1]);
    testing(3, 5, [3, 2, 1, 1]);
    testing(20, 14, [14, 6, 6, 2, 2, 2]);
    testing(14, 20, [14, 6, 6, 2, 2, 2]);
  });
});

// The fusc function -- Part 1

import { assert } from 'chai';

export function fusc (num: number): number {
  if (num === 0 || num === 1) {
    return num;
  }

  const n = Math.floor(num / 2);
  if (num % 2) {
    return fusc(n) + fusc(n + 1);
  } else {
    return fusc(n);
  }
}

describe('The fusc function -- part 1', function () {
  it('Example tests', function () {
    assert.equal(fusc(0), 0, 'fusc(0)');
    assert.equal(fusc(1), 1, 'fusc(1)');
    assert.equal(fusc(85), 21, 'fusc(85)');

    const solutions = [0, 1, 1, 2, 1, 3, 2, 3, 1, 4, 3, 5, 2, 5, 3, 4, 1, 5, 4, 7, 3];
    for (let i = 0; i < solutions.length; i++) {
      assert.equal(fusc(i), solutions[i], `fusc(${i})`);
    }
  });
});

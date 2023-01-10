// Odd-Even String Sort

import { assert } from 'chai';

export function sortMyString (s:string):string {
  const groups = s.split('').reduce((acc, a, i) => {
    if (i % 2) {
      acc[1] += a;
    } else {
      acc[0] += a;
    }
    return acc;
  }, ['', '']);
  return groups.join(' ');
}

describe('Other Tests', function () {
  it('Static Ones', function () {
    assert.equal(sortMyString('CodeWars'), 'CdWr oeas');
    assert.equal(sortMyString("YCOLUE'VREER"), "YOU'RE CLEVER");
  });
});

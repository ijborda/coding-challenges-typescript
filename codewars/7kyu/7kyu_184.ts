// Which section did you scroll to?

import { assert } from 'chai';

export function getSectionId (scroll: number, sizes: number[]) {
  const bounds = sizes.reduce((acc, a, i) => {
    if (i === 0) {
      acc.push(a);
    } else {
      acc.push(a + acc[acc.length - 1]);
    }
    return acc;
  }, [] as number[]);
  return bounds.findIndex(a => scroll < a);
}

// Test
const testing = (n: number, a: number[], exp: number) => it(`getSectionId(${n}, [${a.join(', ')}])`, () => assert.strictEqual(getSectionId(n, a), exp));
describe('Basic tests', function () {
  testing(1, [300, 200, 400, 600, 100], 0);
  testing(299, [300, 200, 400, 600, 100], 0);
  testing(300, [300, 200, 400, 600, 100], 1);
  testing(1599, [300, 200, 400, 600, 100], 4);
  testing(1600, [300, 200, 400, 600, 100], -1);
});

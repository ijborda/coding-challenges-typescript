// Check same case

import { assert } from 'chai';

export function sameCase (a : string, b : string): number {
  if (!isLetter(a) || !isLetter(b)) {
    return -1;
  }
  return isLowerCase(a) === isLowerCase(b) ? 1 : 0;
}

const isLetter = (a: string): boolean => /[a-z]/i.test(a);

const isLowerCase = (a: string): boolean => a.toLocaleLowerCase() === a;

// Test
function doTest (a : string, b : string, expected : number) {
  it(`Testing for "${a}" and "${b}"`, function () {
    assert.strictEqual(sameCase(a, b), expected);
  });
}
describe('Solution', function () {
  doTest('C', 'B', 1);
  doTest('b', 'a', 1);
  doTest('d', 'd', 1);
  doTest('A', 's', 0);
  doTest('c', 'B', 0);
  doTest('b', 'Z', 0);
  doTest('\t', 'Z', -1);
  doTest('H', ':', -1);
});

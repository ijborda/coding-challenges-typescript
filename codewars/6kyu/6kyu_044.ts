// A Rule of Divisibility by 13

import { assert } from 'chai';

export function thirt (n: number): number {
  const SEQ = [1, 10, 9, 12, 3, 4];

  let term = n;
  while (true) {
    const newTerm = term.toString().split('').reverse().reduce((acc, a, i) => {
      return acc + (+a * SEQ[i % SEQ.length]);
    }, 0);
    if (newTerm === term) {
      return newTerm;
    }
    term = newTerm;
  }
}

// Test
describe('Fixed Tests thirt', function () {
  it('Basic tests', function () {
    assert.strictEqual(thirt(1234567), 87);
    assert.strictEqual(thirt(8529), 79);
    assert.strictEqual(thirt(85299258), 31);
  });
});

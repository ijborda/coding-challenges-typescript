// "Very Even" Numbers.

import { assert } from 'chai';

export function isVeryEvenNumber (n: number): boolean {
  while (n.toString().length !== 1) {
    n = n.toString().split('').reduce((acc, a) => acc + +a, 0);
  }
  return n % 2 === 0;
}

describe('Fixed tests', () => {
  const inputs: number[] = [0, 4, 12, 222, 5, 45, 4554, 1234, 88, 24, 400000220];
  const expecteds: boolean[] = [true, true, false, true, false, false, false, false, false, true, true];
  for (let i = 0; i < inputs.length; i++) {
    const n = inputs[i];
    const expected = expecteds[i];
    it(`Testing for n = ${n}`, () => {
      const actual: boolean = isVeryEvenNumber(n);
      assert.strictEqual(actual, expected, `${n} is ${expected ? '' : 'not '}'Very Even'`);
    });
  }
});

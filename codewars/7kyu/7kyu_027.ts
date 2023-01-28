// Testing 1-2-3

import { assert } from 'chai';

export function number (array: string[]): string[] {
  return array.map((a, i) => `${i + 1}: ${a}`);
}

describe('Testing 1-2-3', () => {
  it('Fixed tests', () => {
    assert.deepEqual(number([]), []);
    assert.deepEqual(number(['a', 'b', 'c']), ['1: a', '2: b', '3: c']);
    assert.deepEqual(number(['', '', '', '', '']), ['1: ', '2: ', '3: ', '4: ', '5: ']);
  });
});

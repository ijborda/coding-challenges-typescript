// Sort an array by value and index

import { assert } from 'chai';

export function sortByValueAndIndex (array:number[]) : number[] {
  return array
    .map((a, i) => ({ value: a, index: i }))
    .sort((a, b) => (a.value * (a.index + 1)) - (b.value * (b.index + 1)))
    .map(a => a.value);
}

describe('Kata Tests', function () {
  it('Example Tests', function () {
    let actual = sortByValueAndIndex([1, 2, 3, 4, 5]);
    let expected = [1, 2, 3, 4, 5];
    assert.deepEqual(actual, expected);

    actual = sortByValueAndIndex([23, 2, 3, 4, 5]);
    expected = [2, 3, 4, 23, 5];
    assert.deepEqual(actual, expected);

    actual = sortByValueAndIndex([26, 2, 3, 4, 5]);
    expected = [2, 3, 4, 5, 26];
    assert.deepEqual(actual, expected);

    actual = sortByValueAndIndex([9, 5, 1, 4, 3]);
    expected = [1, 9, 5, 3, 4];
    assert.deepEqual(actual, expected);
  });
});

// Smallest unused ID;

import { assert } from 'chai';

export function nextId (ids: number[]): any {
  const series = Array.from({ length: ids.length + 1 }, (_, i) => i);
  return series.find(a => !ids.includes(a));
}

describe('Basic test', () => {
  it('Should pass basic tests', () => {
    assert.equal(nextId([0, 1, 2, 3, 5]), 4);
    assert.equal(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);
    assert.equal(nextId([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0);
    assert.equal(nextId([1, 2, 0, 2, 3]), 4);
  });
});

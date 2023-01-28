// Quarter of the year

import { assert } from 'chai';

export function quarterOf (month: number): number {
  return Math.ceil(month / 3);
}

describe('Basic tests', () => {
  it('Should pass basic tests', () => {
    assert.equal(quarterOf(3), 1);
    assert.equal(quarterOf(8), 3);
    assert.equal(quarterOf(11), 4);
  });
});

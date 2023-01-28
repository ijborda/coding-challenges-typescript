// Is he gonna survive?

import { assert } from 'chai';

export function hero (bullets: number, dragons: number): boolean {
  return bullets >= dragons * 2;
}

describe('Tests:', function () {
  it('Basic tests:', function () {
    assert.equal(hero(10, 5), true);
    assert.equal(hero(7, 4), false);
    assert.equal(hero(4, 5), false);
    assert.equal(hero(100, 40), true);
    assert.equal(hero(1500, 751), false);
    assert.equal(hero(0, 1), false);
  });
});

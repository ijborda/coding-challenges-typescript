// How many stairs will Suzuki climb in 20 years?

import { assert } from 'chai';

export function plural (n:number):boolean {
  return n !== 1;
}

describe('solution', function () {
  it('BasicTests', function () {
    assert.equal(plural(0), true, 'Plural for 0');
    assert.equal(plural(0.5), true, 'Plural for 0.5');
    assert.equal(plural(1), false, 'Plural for 1');
    assert.equal(plural(100), true, 'Plural for 100');
    assert.equal(plural(Infinity), true, 'Plural for Infinity');
  });
});

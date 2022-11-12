// Even or Odd

import { assert } from 'chai';

export function even_or_odd (n:number):string {
  enum Response {
    EVEN = 'Even',
    ODD = 'Odd'
  }
  return n % 2 === 0 ? Response.EVEN : Response.ODD;
}

// Test
describe('solution', function () {
  it('basicTests', function () {
    assert.equal(even_or_odd(2), 'Even');
    assert.equal(even_or_odd(0), 'Even');
    assert.equal(even_or_odd(7), 'Odd');
    assert.equal(even_or_odd(1), 'Odd');
    assert.equal(even_or_odd(-4), 'Even');
    assert.equal(even_or_odd(-3), 'Odd');
  });
});

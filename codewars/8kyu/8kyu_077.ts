// Type of sum

import { assert } from 'chai';

export function typeOfSum (a:any, b:any):string {
  return typeof (a + b);
}

// Test
describe('example', function () {
  it('test', function () {
    assert.equal(typeOfSum(12, 1), 'number');
    assert.equal(typeOfSum('d', 1), 'string');
    assert.equal(typeOfSum(1, 'a'), 'string');
    assert.equal(typeOfSum('dd', ''), 'string');
    assert.equal(typeOfSum(true, 1), 'number');
    assert.equal(typeOfSum('s', false), 'string');
    assert.equal(typeOfSum(null, 1), 'number');
    assert.equal(typeOfSum('s', null), 'string');
    assert.equal(typeOfSum(null, undefined), 'number');
    assert.equal(typeOfSum(undefined, 're'), 'string');
    assert.equal(typeOfSum(undefined, true), 'number');
    assert.equal(typeOfSum(null, false), 'number');
  });
});

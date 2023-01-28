// Is it even?

import { assert } from 'chai';

export const testEven = (n : number) : boolean => {
  return n % 2 === 0;
};

// Test
describe('Tests', function () {
  it('Fixed tests', function () {
    assert.equal(testEven(0), true, 'testEven for 0');
    assert.equal(testEven(0.5), false, 'testEven for 0.5');
    assert.equal(testEven(1), false, 'testEven for 1');
    assert.equal(testEven(2), true, 'testEven for 2');
    assert.equal(testEven(-4), true, 'testEven for 2');
    assert.equal(testEven(15), false, 'testEven for 15');
    assert.equal(testEven(20), true, 'testEven for 20');
    assert.equal(testEven(220), true, 'testEven for 220');
    assert.equal(testEven(222222221), false, 'testEven for 222222221');
    assert.equal(testEven(500000000000), true, 'testEven for 500000000000');
  });
});

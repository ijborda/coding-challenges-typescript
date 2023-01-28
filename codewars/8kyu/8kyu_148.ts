// How many stairs will Suzuki climb in 20 years?

import { assert } from 'chai';

export const xor = (a:boolean, b:boolean):boolean => {
  return Number(a) + Number(b) === 1;
};

describe("Your 'xor' function/operator", () => {
  it('should work for the four basic cases described above', () => {
    assert.equal(xor(false, false), false, 'false xor false === false');
    assert.equal(xor(true, false), true, 'true xor false === true');
    assert.equal(xor(false, true), true, 'false xor true === true');
    assert.equal(xor(true, true), false, 'true xor true === false');
    assert.notEqual(xor(true, true), true, "'xor' is NOT identical to 'or'");
  });
});

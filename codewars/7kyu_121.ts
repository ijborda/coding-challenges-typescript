// Help Bob count letters and digits

import { assert } from 'chai';

export function countLettersAndDigits (input: string): number {
  return (input.match(/[a-z0-9]/gi) || []).length;
}

describe('Fixed tests', function () {
  it('Should count correctly', function () {
    assert.equal(countLettersAndDigits('hel2!lo'), 6);
    assert.equal(countLettersAndDigits('n!!ice!!123'), 7);
    assert.equal(countLettersAndDigits('1'), 1);
    assert.equal(countLettersAndDigits('?'), 0);
    assert.equal(countLettersAndDigits('12345f%%%t5t&/6'), 10);
    assert.equal(countLettersAndDigits('aBcDeFg090'), 10);
    assert.equal(countLettersAndDigits('u_n_d_e_r__S_C_O_R_E'), 10);
  });
});

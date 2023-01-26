// MOD 256 without the MOD operator

import { assert } from 'chai';

export function mod256WithoutMod (n:number):number {
  const remainder = Math.abs(n) - (Math.floor(Math.abs(n) / 256) * 256);
  return Math.sign(n) * remainder;
}

// Short version:
// export function mod256WithoutMod (n:number):number {
//   return Math.sign(n) * (Math.abs(n) & 255);
// }

describe('solution', function () {
  it('basicTests', function () {
    assert.equal(mod256WithoutMod(254), 254);
    assert.equal(mod256WithoutMod(256), 0);
    assert.equal(mod256WithoutMod(258), 2);

    assert.equal(mod256WithoutMod(-254), -254);
    assert.equal(mod256WithoutMod(-256), 0);
    assert.equal(mod256WithoutMod(-258), -2);
  });
});

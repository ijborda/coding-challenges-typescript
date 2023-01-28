// Short Long Short

import { assert } from 'chai';

export function shortLongShort (a:string, b:string) {
  const long = a.length > b.length ? a : b;
  const short = long === a ? b : a;
  return `${short}${long}${short}`;
}

describe('Basic tests', function () {
  it('Should pass basic tests', function () {
    assert.equal(shortLongShort('45', '1'), '1451');
    assert.equal(shortLongShort('13', '200'), '1320013');
    assert.equal(shortLongShort('Soon', 'Me'), 'MeSoonMe');
    assert.equal(shortLongShort('U', 'False'), 'UFalseU');
  });
});

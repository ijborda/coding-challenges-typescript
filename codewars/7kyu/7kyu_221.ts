// Hex Word Sum

import { assert } from 'chai';

export function hexWordSum (string: string): number {
  return string.split(' ').reduce((acc, word) => acc + convertHexToDec(word), 0);
}

const convertHexToDec = (word: string): number => {
  if (!word || /[G-NP-RT-Z]/.test(word)) {
    return 0;
  }
  return parseInt(word.replace(/S/g, '5').replace(/O/g, '0'), 16);
};

// Test
describe('Basic', function () {
  it('Test', function () {
    assert.equal(hexWordSum('DEFACE'), 14613198, 'Should convert hex to decimal correctly');
    assert.equal(hexWordSum('SAFE'), 23294, 'Should be able to interpret "S" as "5"');
    assert.equal(hexWordSum('CODE'), 49374, 'Should be able to interpret "O" as "0"');
    assert.equal(hexWordSum('BUGS'), 0, 'A word that cannot be converted to hex has value of 0');
    assert.equal(hexWordSum(''), 0, 'Empty string returns 0');
    assert.equal(hexWordSum('DO YOU SEE THAT BEE DRINKING DECAF COFFEE'), 13565769, 'Should work with multiple words');
    assert.equal(hexWordSum('ASSESS ANY BAD CODE AND TRY AGAIN'), 10889952, 'Should work with multiple words');
  });
});

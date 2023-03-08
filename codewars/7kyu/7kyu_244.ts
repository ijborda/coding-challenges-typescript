// Circle cipher

import { assert } from 'chai';

export function encode (s: string): string {
  const sArray = s.split('');
  const length = sArray.length;
  let decoded = '';

  for (let i = 0; i < length; i++) {
    decoded += i % 2 ? sArray.pop() : sArray.shift();
  }

  return decoded;
}

export function decode (s: string): string {
  let decoded1 = '';
  let decoded2 = '';

  s.split('').forEach((a, i) => {
    i % 2 ? decoded2 += a : decoded1 += a;
  });

  return decoded1 + decoded2.split('').reverse().join('');
}

// Test
describe('solutionTest', function () {
  it('encodeBasicTests', function () {
    assert.strictEqual('csordaew', encode('codewars'));
    assert.strictEqual('wehti', encode('white'));
    assert.strictEqual('Atsrse', encode('Assert'));
    assert.strictEqual('H!edlllroo w', encode('Hello world!'));
    assert.strictEqual('Y.oaut ahka vsei hcth oesteanl stnoa rt', encode('You have chosen to translate this kata.'));
  });

  it('decodeBasicTests', function () {
    assert.strictEqual('codewars', decode('csordaew'));
    assert.strictEqual('white', decode('wehti'));
    assert.strictEqual('Assert', decode('Atsrse'));
    assert.strictEqual('Hello world!', decode('H!edlllroo w'));
    assert.strictEqual('You have chosen to translate this kata.', decode('Y.oaut ahka vsei hcth oesteanl stnoa rt'));
  });
});

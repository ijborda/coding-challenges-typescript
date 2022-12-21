// Alternate capitalization

import { assert } from 'chai';

export function capitalize (s: string): string[] {
  let evenCap = '';
  let oddCap = '';
  s.split('').forEach((a, i) => {
    evenCap += i % 2 ? a.toLowerCase() : a.toUpperCase();
    oddCap += i % 2 ? a.toUpperCase() : a.toLowerCase();
  });
  return [evenCap, oddCap];
}

describe('Basic tests', function () {
  it('Testing for abcdef', () => assert.deepEqual(capitalize('abcdef'), ['AbCdEf', 'aBcDeF']));
  it('Testing for codewars', () => assert.deepEqual(capitalize('codewars'), ['CoDeWaRs', 'cOdEwArS']));
  it('Testing for abracadabra', () => assert.deepEqual(capitalize('abracadabra'), ['AbRaCaDaBrA', 'aBrAcAdAbRa']));
  it('Testing for codewarriors', () => assert.deepEqual(capitalize('codewarriors'), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']));
  it('Testing for indexinglessons', () => assert.deepEqual(capitalize('indexinglessons'), ['InDeXiNgLeSsOnS', 'iNdExInGlEsSoNs']));
  it('Testing for codingisafunactivity', () => assert.deepEqual(capitalize('codingisafunactivity'), ['CoDiNgIsAfUnAcTiViTy', 'cOdInGiSaFuNaCtIvItY']));
});

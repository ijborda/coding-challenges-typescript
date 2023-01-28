// Char Code Calculation

import { assert } from 'chai';

export const calc = (str: string): number => {
  const total1 = str.split('').reduce((acc, a) => acc + a.charCodeAt(0), '');
  const total2 = total1.replace(/7/g, '1');
  return calcDigitSum(total1) - calcDigitSum(total2);
};

const calcDigitSum = (str: string): number => {
  return str.split('').reduce((acc, a) => acc + +a, 0);
};

describe('Given a string', () => {
  it('will calculate the result', () => {
    assert.strictEqual(calc('ABC'), 6);
  });
  it('will calculate the result', () => {
    assert.strictEqual(calc('abcdef'), 6);
  });
  it('will calculate the result', () => {
    assert.strictEqual(calc('fcvepexiziwxtjylaaczdcypmebquzwmpdscoymfsnskdkdupjtygdqsbhsjcdptpukqzaintjrfitdqtbmapmzsilwgreovhslvwcyxyhlvkqctxvvkgntdclygboibenvldqwrsywdfclqsajvaesuzvhltpfqhszzismetsymnrcnylivbqkvjsaaqzwkwrzyvcvrvooewxctnoslnxkdvfaybieeodzfmfnwhqvpljhcnxmyijzxtvpirqmnoyenajiplqtfjqrcbfqxxorkdmckqwuzqwrubajvflwokokcdvtxzzyojayqjekahwfyltzptxllaszkpfobbvuntdnvdcdrrhsrhrqinjttpwhluzrcorovskyfzzibbcwnvthuplbscmvwfhvkqppkuoombtedtwjfvoshoowsbblvlscpvnulidlnpjswhxkikfjtceehbvvygcvwocrzngqaqzqtlukbajgwbqrqhexsttwfbjboieabgvhlpchnxymcnetyrhnulmuhplraxopwvsweeewryacnkiikolpszyaitsyqxyslvesocjfzbddbctffxoihvhaevqhzgsoayaeljytliqcbjtnedevzywscpvypzzanrgkooewgkloyiccpjfjpktyheqjnxzoxfwxbyjdptqiljdohhhypenngqlvvpcwjecodqxolcwbrnxqvxlkgxoqkijpzkanyysnsjfoqyzmbampyylvgtfmhdhkbhmjxfji'), 414);
  });
});

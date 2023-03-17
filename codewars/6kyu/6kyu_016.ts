// Decipher this!

import { assert } from 'chai';

export function decipherThis (str: string): string {
  return str.split(' ').map(word => encode(word)).join(' ');
}

const encode = (word: string): string => {
  word = word.replace(/(^\d+)/g, (x) => String.fromCharCode(+x));
  const wordArr = word.split('');
  wordArr[1] = word.slice(-1);
  wordArr[wordArr.length - 1] = word[1];
  return wordArr.join('');
};

// Test
const Test = {
  expect: (...args: any[]) => (assert as any)(...args),
  assertEquals: (...args: any[]) => (assert as any).equal(...args)
};
describe('decipherThis', () => {
  it('Have a go at this and see how you do', () => {
    Test.assertEquals(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do');
  });
});

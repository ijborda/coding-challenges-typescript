// Multiplication table

import { assert } from 'chai';

export const encryptThis = (str: string): string => {
  return str.split(' ').map(word => encryptWord(word)).join(' ');
};

const encryptWord = (word: string): string => {
  if (word.length === 0) {
    return word;
  }
  const wordArr = word.split('');
  wordArr[0] = word[0].charCodeAt(0).toString();
  wordArr[1] = word[word.length - 1];
  wordArr[wordArr.length - 1] = word[1];
  return wordArr.join('');
};

// Test
describe('Fixed Tests', function () {
  it('should work with fixed tests', function () {
    assert.strictEqual(encryptThis(''), '');
    assert.strictEqual(encryptThis('A'), '65');
    assert.strictEqual(encryptThis('A wise old owl lived in an oak'), '65 119esi 111dl 111lw 108dvei 105n 97n 111ka');
    assert.strictEqual(encryptThis('The more he saw the less he spoke'), '84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp');
    assert.strictEqual(encryptThis('The less he spoke the more he heard'), '84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare');
    assert.strictEqual(encryptThis('Why can we not all be like that wise old bird'), '87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri');
    assert.strictEqual(encryptThis('Thank you Piotr for all your help'), '84kanh 121uo 80roti 102ro 97ll 121ruo 104ple');
  });
});

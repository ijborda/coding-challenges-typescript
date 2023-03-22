// Mexican Wave

import chai, { assert } from 'chai';

export function wave (str: string): Array<string> {
  return str.split('').map((_, i) => capitalizeLetter(str, i)).filter(a => a !== a.toLowerCase());
}

const capitalizeLetter = (word: string, index: number): string => {
  const wordArr = word.split('');
  wordArr[index] = wordArr[index].toUpperCase();
  return wordArr.join('');
};

// Test
chai.config.truncateThreshold = 0;
let result: string[];
describe('Sample Tests', function () {
  it('Should pass sample tests', function () {
    result = ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO'];
    assert.deepEqual(wave('hello'), result, "Should return: '" + result + "'");

    result = ['Codewars', 'cOdewars', 'coDewars', 'codEwars', 'codeWars', 'codewArs', 'codewaRs', 'codewarS'];
    assert.deepEqual(wave('codewars'), result, "Should return: '" + result + "'");

    result = [];
    assert.deepEqual(wave(''), result, "Should return: '" + result + "'");

    result = ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS'];
    assert.deepEqual(wave('two words'), result, "Should return: '" + result + "'");

    result = [' Gap ', ' gAp ', ' gaP '];
    assert.deepEqual(wave(' gap '), result, "Should return: '" + result + "'");
  });
});

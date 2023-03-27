// Consonant value

import { assert } from 'chai';

export function solve (s: string) {
  return Math.max(...(s.match(/[^aeiou]+/g) || []).map(a => getVal(a)));
}

const getVal = (substr: string): number => {
  return substr.split('').reduce((acc, letter) => acc + letter.charCodeAt(0) - 96, 0);
};

// Test
describe('Basic tests', function () {
  it("Testing for 'zodiac', expecting: 26", () => assert.strictEqual(solve('zodiac'), 26));
  it("Testing for 'chruschtschov', expecting: 80", () => assert.strictEqual(solve('chruschtschov'), 80));
  it("Testing for 'khrushchev', expecting: 38", () => assert.strictEqual(solve('khrushchev'), 38));
  it("Testing for 'strength', expecting: 57", () => assert.strictEqual(solve('strength'), 57));
  it("Testing for 'catchphrase', expecting: 73", () => assert.strictEqual(solve('catchphrase'), 73));
  it("Testing for 'twelfthstreet', expecting: 103", () => assert.strictEqual(solve('twelfthstreet'), 103));
  it("Testing for 'mischtschenkoana', expecting: 80", () => assert.strictEqual(solve('mischtschenkoana'), 80));
});

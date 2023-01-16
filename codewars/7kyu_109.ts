// Holiday III - Fire on the boat

import { assert } from 'chai';

export const removeFire = (str: string): string => {
  return str.replace(/Fire/g, '~~');
};

const solutions = [
  [
    'Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast',
    'Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast'
  ],
  ['Mast Deck Engine Water Fire', 'Mast Deck Engine Water ~~'],
  [
    'Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain',
    '~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain'
  ]
] as [string, string][];

describe('example', () => {
  solutions.forEach(([input, expected]: [string, string]) => {
    it(`Works with ${input}`, () => {
      assert.strictEqual(removeFire(input), expected);
    });
  });
});

// The 12 Days of Christmas

import { assert } from 'chai';
import * as chai from 'chai';

export function comparator (a: string, b: string): number {
  const numa = +(a.match(/\d+/) || 0);
  const numb = +(b.match(/\d+/) || 0);
  return numb - numa || b.localeCompare(a);
}

// Test
chai.config.truncateThreshold = 0;

describe('SolutionTests', function () {
  const shuffle = function (list:string[]) {
    const shuffled = [];
    for (let i = 0; i < list.length; i++) shuffled.push(list[i]);
    for (let i = 0; i < shuffled.length; i++) {
      if (Math.random() > 0.5) {
        const j:number = (i + 3) % shuffled.length;
        // swap lines i & j
        const tmp:string = shuffled[i] as string;
        shuffled[i] = shuffled[j] as string;
        shuffled[j] = tmp;
      }
    }
    return shuffled;
  };

  const display = function (list:string[]) {
    for (const i in list) {
      console.log(list[i]);
    }
    return list;
  };

  const doTest = function (lines:string[]) {
    const shuffled = shuffle(lines);
    console.log('SHUFFLED:'); display(shuffled);
    const actual = shuffled.sort(comparator);
    const expected = lines;
    assert.deepEqual(actual, expected, 'Christmas is cancelled!');
  };

  it('verse12', function () {
    const lines = [
      'On the 12th day of Christmas my true love gave to me',
      '12 drummers drumming,',
      '11 pipers piping,',
      '10 lords a leaping,',
      '9 ladies dancing,',
      '8 maids a milking,',
      '7 swans a swimming,',
      '6 geese a laying,',
      '5 golden rings,',
      '4 calling birds,',
      '3 French hens,',
      '2 turtle doves and',
      'a partridge in a pear tree.'
    ];
    doTest(lines);
  });
});

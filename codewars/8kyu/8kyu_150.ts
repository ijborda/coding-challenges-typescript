// 101 Dalmatians - squash the bugs, not the dogs!

import { assert } from 'chai';

export function howManyDalmatians (number : number): string {
  const dogs = ['Hardly any', 'More than a handful!', "Woah that's a lot of dogs!", '101 DALMATIANS!!!'];

  let response: string;
  if (number <= 10) {
    response = dogs[0];
  } else if (number <= 50) {
    response = dogs[1];
  } else if (number === 101) {
    response = dogs[3];
  } else {
    response = dogs[2];
  }

  return response;
}

describe('101 Dalmatians - squash the bugs, not the dogs!', () => {
  it('Fixed tests', () => {
    assert.strictEqual(howManyDalmatians(26), 'More than a handful!');
    assert.strictEqual(howManyDalmatians(8), 'Hardly any');
    assert.strictEqual(howManyDalmatians(14), 'More than a handful!');
    assert.strictEqual(howManyDalmatians(80), "Woah that's a lot of dogs!");
    assert.strictEqual(howManyDalmatians(100), "Woah that's a lot of dogs!");
    assert.strictEqual(howManyDalmatians(101), '101 DALMATIANS!!!');
  });
});

// A wolf in sheep's clothing

import { assert } from 'chai';

export function warnTheSheep (queue: string[]): string {
  enum Response {
    ME = 'Pls go away and stop eating my sheep'
  }
  const n = queue.reverse().findIndex(a => a === 'wolf');
  return n === 0 ? Response.ME : `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`;
}

describe('Basic tests', () => {
  it('Basic tests should work', () => {
    assert.equal(warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']), 'Oi! Sheep number 2! You are about to be eaten by a wolf!');
    assert.equal(warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']), 'Oi! Sheep number 5! You are about to be eaten by a wolf!');
    assert.equal(warnTheSheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']), 'Oi! Sheep number 6! You are about to be eaten by a wolf!');
    assert.equal(warnTheSheep(['sheep', 'wolf', 'sheep']), 'Oi! Sheep number 1! You are about to be eaten by a wolf!');
    assert.equal(warnTheSheep(['sheep', 'sheep', 'wolf']), 'Pls go away and stop eating my sheep');
  });
});

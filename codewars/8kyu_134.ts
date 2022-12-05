// Well of Ideas - Easy Version

import { assert } from 'chai';

export function well (x: string[]): string {
  enum Idea {
    GOOD = 'good',
    BAD = 'bad'
  }
  enum Response {
    SERIES = 'I smell a series!',
    PUBLISH = 'Publish!',
    FAIL = 'Fail!'
  }

  const numGood = x.filter(a => a === Idea.GOOD).length;

  return numGood >= 3 ? Response.SERIES : numGood >= 1 ? Response.PUBLISH : Response.FAIL;
}

describe('Well of Ideas - Easy Version', () => {
  it('Fixed tests', () => {
    assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
  });
});

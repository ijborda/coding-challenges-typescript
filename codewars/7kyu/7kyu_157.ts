// What's my golf score?

import { assert } from 'chai';

export function golfScoreCalculator (parList: string, scoreList: string): number {
  return parList
    .split('')
    .reduce((acc, a, i) => acc + (+scoreList[i] - +a), 0);
}

describe('example', function () {
  it('test', function () {
    assert.equal(golfScoreCalculator('443454444344544443', '353445334534445344'), -1);
  });
});

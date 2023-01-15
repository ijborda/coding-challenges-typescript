// Average Scores

import { assert } from 'chai';

export function average (scores:number[]):number {
  return Math.round(scores.reduce((acc, a) => acc + a, 0) / scores.length);
}

describe('solution', function () {
  it('basicTests', function () {
    let scores = [49, 3, 5, 300, 7];
    assert.equal(average(scores), 73);

    scores = [90, 98, 89, 100, 100, 86, 94];
    assert.equal(average(scores), 94);
  });
});

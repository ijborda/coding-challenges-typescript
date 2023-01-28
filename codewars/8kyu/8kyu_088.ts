// Expressions Matter

import { assert } from 'chai';

export function expressionsMatter (a: number, b: number, c: number): number {
  const ans1 = a * b * c;
  const ans2 = a + b + c;
  const ans3 = (a * b) + c;
  const ans4 = (a + b) * c;
  const ans5 = a * (b + c);
  const ans6 = a + (b * c);
  return Math.max(ans1, ans2, ans3, ans4, ans5, ans6);
}

describe('Small values', function () {
  it('Should work', function () {
    assert.equal(expressionsMatter(2, 1, 2), 6);
    assert.equal(expressionsMatter(2, 1, 1), 4);
    assert.equal(expressionsMatter(1, 1, 1), 3);
    assert.equal(expressionsMatter(1, 2, 3), 9);
    assert.equal(expressionsMatter(1, 3, 1), 5);
    assert.equal(expressionsMatter(2, 2, 2), 8);
  });
});

describe('Medium values', function () {
  it('Should work', function () {
    assert.equal(expressionsMatter(5, 1, 3), 20);
    assert.equal(expressionsMatter(3, 5, 7), 105);
    assert.equal(expressionsMatter(5, 6, 1), 35);
    assert.equal(expressionsMatter(1, 6, 1), 8);
    assert.equal(expressionsMatter(2, 6, 1), 14);
    assert.equal(expressionsMatter(6, 7, 1), 48);
  });
});

describe('Mixed values', function () {
  it('Should work', function () {
    assert.equal(expressionsMatter(2, 10, 3), 60);
    assert.equal(expressionsMatter(1, 8, 3), 27);
    assert.equal(expressionsMatter(9, 7, 2), 126);
    assert.equal(expressionsMatter(1, 1, 10), 20);
    assert.equal(expressionsMatter(9, 1, 1), 18);
    assert.equal(expressionsMatter(10, 5, 6), 300);
    assert.equal(expressionsMatter(1, 10, 1), 12);
  });
});

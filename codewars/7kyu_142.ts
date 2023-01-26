// Cats and shelves

import { assert } from 'chai';

export function solution (start: number, finish: number): number {
  const dist = finish - start;
  return Math.floor(dist / 3) + dist % 3;
}

describe('Mew tests', function () {
  it('Start 1, finish 5', () => assert.strictEqual(solution(1, 5), 2));
  it('Start 3, finish 3', () => assert.strictEqual(solution(3, 3), 0));
  it('Start 2, finish 4', () => assert.strictEqual(solution(2, 4), 2));
});

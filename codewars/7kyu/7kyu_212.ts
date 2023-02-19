// Help Suzuki complete his chores!

import { assert } from 'chai';
import * as chai from 'chai';

export function choreAssignment (chores:number[]): number[] {
  const workload: number[] = [];
  const numStudents = chores.length / 2;

  chores.sort((a, b) => a - b);
  for (let i = 0; i < numStudents; i++) {
    workload.push((chores.shift() || 0) + (chores.pop() || 0));
  }

  return workload.sort((a, b) => a - b);
}

// Test
chai.config.truncateThreshold = 0;
describe('Testing...', function () {
  it('Basic tests', function () {
    const TESTS:number[][][] = [
      [[5, 2, 1, 6, 4, 4], [7, 7, 8]],
      [[1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9], [7, 8, 8, 10, 10, 11]],
      [[5, 8, 3, 5, 3, 10, 5, 3, 10, 2, 4, 8, 7, 3, 9, 6], [10, 11, 11, 11, 11, 12, 12, 13]],
      [[9, 2, 10, 10, 5, 5, 8, 7, 4, 2, 8, 3, 6, 8, 7, 3, 6, 2], [11, 11, 11, 12, 12, 12, 12, 12, 12]],
      [[1, 6, 5, 5, 1, 10, 10, 9, 2, 10, 3, 9, 5, 4, 5, 6, 1, 9, 1, 8], [10, 10, 11, 11, 11, 11, 11, 11, 12, 12]]
    ];
    for (const [inp, exp] of TESTS) {
      assert.deepEqual(choreAssignment(inp), exp);
    }
  });
});

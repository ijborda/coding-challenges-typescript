// Simple Fun #1: Seats in Theater

import { assert } from 'chai';

export function seatsInTheater (nCols: number, nRows: number, col: number, row: number) {
  return (nCols - col + 1) * (nRows - row);
}

describe('basic tests', function () {
  it('seatsInTheater(16, 11, 5, 3)', () => assert.strictEqual(seatsInTheater(16, 11, 5, 3), 96));
  it('seatsInTheater(1, 1, 1, 1)', () => assert.strictEqual(seatsInTheater(1, 1, 1, 1), 0));
  it('seatsInTheater(13, 6, 8, 3)', () => assert.strictEqual(seatsInTheater(13, 6, 8, 3), 18));
  it('seatsInTheater(60, 100, 60, 1)', () => assert.strictEqual(seatsInTheater(60, 100, 60, 1), 99));
  it('seatsInTheater(1000, 1000, 1000, 1000)', () => assert.strictEqual(seatsInTheater(1000, 1000, 1000, 1000), 0));
});

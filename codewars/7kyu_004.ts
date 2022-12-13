// Highest and Lowest

import { assert } from 'chai';

export class Kata {
  static highAndLow (numbers: string): string {
    const numArr = numbers.split(' ').map(a => +a);
    const high = Math.max(...numArr);
    const low = Math.min(...numArr);

    return `${high} ${low}`;
  }
}

describe('Example Tests', function () {
  it('Test 1', function () {
    assert.strictEqual(Kata.highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'), '42 -9');
  });
  it('Test 2', function () {
    assert.strictEqual(Kata.highAndLow('1 2 3'), '3 1');
  });
});

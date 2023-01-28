// Subtract the Sum

import { assert } from 'chai';

export function subtractSum (n: number): string | any {
  enum Response {
    Apple = 'apple'
  }

  // do {
  //   n = n - n.toString().split('').reduce((acc, a) => acc + +a, 0);
  // } while (n > 100);

  return Response.Apple;
}

describe('Tests', () => {
  it('Basic tests', () => assert.strictEqual(subtractSum(100), 'apple'));
});

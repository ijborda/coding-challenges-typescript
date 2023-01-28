// Head, Tail, Init and Last

import { assert } from 'chai';

export const head = (arr: number[]): number => {
  return arr[0];
};

export const tail = (arr: number[]): number[] => {
  return arr.slice(1);
};

export const init = (arr: number[]): number[] => {
  return arr.slice(0, -1);
};

export const last = (arr: number[]): number => {
  return arr.slice(-1)[0];
};

describe('Array methods', function () {
  it('Sample Tests', function () {
    assert.strictEqual(head([5, 1]), 5);
    assert.deepEqual(tail([1]), []);
    assert.deepEqual(init([1, 5, 7, 9]), [1, 5, 7]);
    assert.strictEqual(last([7, 2]), 2);
  });
});

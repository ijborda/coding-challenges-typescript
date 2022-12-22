// Row Weights

import { assert } from 'chai';

export function rowWeights (arr: number[]): any {
  return arr.reduce((acc, a, i) => i % 2 ? [acc[0], acc[1] + a] : [acc[0] + a, acc[1]], [0, 0]);
}

describe('Basic tests', () => {
  it('Testing for [80]', () => assert.deepEqual(rowWeights([80]), [80, 0]));
  it('Testing for [100, 50]', () => assert.deepEqual(rowWeights([100, 50]), [100, 50]));
  it('Testing for [50, 60, 70, 80]', () => assert.deepEqual(rowWeights([50, 60, 70, 80]), [120, 140]));
  it('Testing for [13, 27, 49]', () => assert.deepEqual(rowWeights([13, 27, 49]), [62, 27]));
  it('Testing for [70, 58, 75, 34, 91]', () => assert.deepEqual(rowWeights([70, 58, 75, 34, 91]), [236, 92]));
  it('Testing for [29, 83, 67, 53, 19, 28, 96]', () => assert.deepEqual(rowWeights([29, 83, 67, 53, 19, 28, 96]), [211, 164]));
  it('Testing for [0]', () => assert.deepEqual(rowWeights([0]), [0, 0]));
  it('Testing for [100, 51, 50, 100]', () => assert.deepEqual(rowWeights([100, 51, 50, 100]), [150, 151]));
  it('Testing for [39, 84, 74, 18, 59, 72, 35, 61]', () =>
    assert.deepEqual(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]), [207, 235]));
  it('Testing for [0, 1, 0]', () => assert.deepEqual(rowWeights([0, 1, 0]), [0, 1]));
});

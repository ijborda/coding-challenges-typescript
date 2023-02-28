// Pure Functions

import { assert } from 'chai';
import * as chai from 'chai';

type State = {
  modifier: number
};

export function solution (arr: number[], options: State) {
  return arr.map(a => a + (2 * options.modifier));
}

// Test
chai.config.truncateThreshold = 0;
describe('pure', () => {
  it('should not mutate arr', () => {
    const arr = [1, 2, 3];
    const newArr = solution(arr, { modifier: 2 });

    assert.notEqual(newArr, arr);
  });

  it('should not mutate options', () => {
    const options = { modifier: 2 };
    solution([1, 2, 3], options);

    assert.deepEqual(options, { modifier: 2 });
  });

  it('should not depend on out of scope variables', () => {
    const source = 'return ' + solution.toString();
    // eslint-disable-next-line no-new-func
    const sol = Function('arr1', 'options', source);
    sol([1, 2], { modifier: 1 });

    assert.isOk('Looks OK');
  });

  it('should not output (no-console)', () => {
    const source = solution.toString();

    if (/console/.test(source)) {
      assert.fail();
    }
  });
});

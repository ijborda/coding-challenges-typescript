// Sort arrays - 1

import { assert } from 'chai';

export function sortMe (names: string[]): string[] {
  return names.sort();
}

describe('Basic tests', () => {
  it('Testing basic sample test', () => {
    assert.deepEqual(sortMe(['one', 'two', 'three']), ['one', 'three', 'two']);
  });
});

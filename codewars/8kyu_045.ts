// MakeUpperCase

import { assert } from 'chai';

export function makeUpperCase (str: string): string {
  return str.toUpperCase();
}

// Test
describe('MakeUpperCase', () => {
  it('Fixed tests', () => {
    assert.strictEqual(makeUpperCase('hello'), 'HELLO');
    assert.strictEqual(makeUpperCase('hello world'), 'HELLO WORLD');
    assert.strictEqual(makeUpperCase('hello world !'), 'HELLO WORLD !');
    assert.strictEqual(makeUpperCase('heLlO wORLd !'), 'HELLO WORLD !');
    assert.strictEqual(makeUpperCase('1,2,3 hello world!'), '1,2,3 HELLO WORLD!');
  });
});

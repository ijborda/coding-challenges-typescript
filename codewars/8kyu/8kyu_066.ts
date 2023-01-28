// Grasshopper - Debug sayHello

import { assert } from 'chai';

export function sayHello (name: string): string {
  return `Hello, ${name}`;
}

// Test
describe('Basic tests', () => {
  it('Should pass basic tests', () => {
    assert.equal(sayHello('Mr. Spock'), 'Hello, Mr. Spock');
    assert.equal(sayHello('Captain Kirk'), 'Hello, Captain Kirk');
    assert.equal(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura');
    assert.equal(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy');
  });
});

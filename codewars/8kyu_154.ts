// Hello, Name or World!

import { assert } from 'chai';

export function hello (name = ''): string {
  if (!name) {
    name = 'World';
  }
  const nameClean = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Hello, ${nameClean}!`;
}

describe('Basic tests', () => {
  it('Should pass basic tests', () => {
    assert.equal(hello('johN'), 'Hello, John!');
    assert.equal(hello('alice'), 'Hello, Alice!');
    assert.equal(hello(), 'Hello, World!');
    assert.equal(hello(''), 'Hello, World!');
  });
});

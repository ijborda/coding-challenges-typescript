// Truthy and Falsy

import { assert } from 'chai';

export const truthy = [1, 2, 3, 4, 5];
export const falsy = [0, null, undefined, NaN, ''];

// Test
declare let Set: any;
describe('length', () => {
  it('truthy array should have at least 5 unique elements', () => {
    assert.isAtLeast(new Set(truthy).size, 5);
  });

  it('falsy array should have at least 5 unique elements', () => {
    assert.isAtLeast(new Set(falsy).size, 5);
  });
});

describe('truthy', () => {
  it('elements should evaluate to true', () => {
    for (const element of truthy) {
      assert.isTrue(!!element, `Value ${element} is falsy`);
    }
  });
});

describe('falsy', () => {
  it('elements should evaluate to false', () => {
    for (const element of falsy) {
      assert.isFalse(!!element, `Value ${element} is truthy`);
    }
  });
});

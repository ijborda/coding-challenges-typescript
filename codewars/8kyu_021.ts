// Grasshopper - Basic Function Fixer

import { assert } from 'chai';

const addFive = (num : number) : number => {
  return num + 5;
};

// Test
describe('Tests', function () {
  it('Fixed tests', function () {
    assert.strictEqual(addFive(5), 10);
    assert.strictEqual(addFive(0), 5);
    assert.strictEqual(addFive(-5), 0);
  });
});

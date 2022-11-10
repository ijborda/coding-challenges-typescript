// String Templates - Bug Fixing #5

import { strict as assert } from 'assert';

function buildString (...template:string[]):string {
  return `I like ${template.join(', ')}!`;
}

// Test
describe('Fixed Tests', function () {
  it('Basic tests', function () {
    assert.equal(buildString('Cheese', 'Milk', 'Chocolate'), 'I like Cheese, Milk, Chocolate!');
    assert.equal(buildString('Cheese', 'Milk'), 'I like Cheese, Milk!');
    assert.equal(buildString('Chocolate'), 'I like Chocolate!');
  });
});

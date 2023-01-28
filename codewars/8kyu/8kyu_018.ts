// Basic variable assignment

import { assert } from 'chai';

const a = 'code';
const b = 'wa.rs';
const name = a + b;

// Test
describe('Basic tests', function () {
  it('Is name equal to codewa.rs?', () => {
    assert.equal(name, 'codewa.rs', 'Typescript, just as plain JS, uses one equal sign (=) for asignment.');
  });
});

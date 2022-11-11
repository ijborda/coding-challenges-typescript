// Function 1 - hello world

import { assert } from 'chai';

const greet = () => 'hello world!';

// Test
describe('hello world', () => it('greeting', () => assert.equal(greet(), 'hello world!')));

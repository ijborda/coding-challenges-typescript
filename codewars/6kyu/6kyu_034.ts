// CamelCase Method

import chai, { assert } from 'chai';

export function camelCase (str: string): string {
  return str.split(' ').map(a => a.slice(0, 1).toUpperCase() + a.slice(1).toLowerCase()).join('');
}

// Test
chai.config.truncateThreshold = 0;
describe('Sample Test Cases', function () {
  it('Should return a CamelCased string', function () {
    assert.equal(camelCase(''), '');
    assert.equal(camelCase('test case'), 'TestCase');
    assert.equal(camelCase('camel case method'), 'CamelCaseMethod');
    assert.equal(camelCase('say hello'), 'SayHello');
    assert.equal(camelCase('camel case word'), 'CamelCaseWord');
  });
});

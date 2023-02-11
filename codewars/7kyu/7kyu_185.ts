// Test Your Knowledge Of Function Scope

import { assert } from 'chai';

export const add = (a: number) => (b: number): number => a + b;

// Alternative
// export function add (a: number) {
//   return function (b: number): number {
//     return a + b;
//   };
// }

// Test
describe('Basic tests', function () {
  it('Testing : ', function () {
    assert.strictEqual(add(2)(5), 7, 'Should return the addition of these invocations!');
    assert.strictEqual(add(14)(25), 39, 'Should return the addition of these invocations!');
    assert.strictEqual(add(10)(10), 20, 'Should return the addition of these invocations!');
    assert.strictEqual(add(0)(0), 0, 'Should return the addition of these invocations!');
  });
});

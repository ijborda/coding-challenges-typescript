// Create Phone Number

import { assert } from 'chai';

export function createPhoneNumber (numbers: number[]): string {
  const a = numbers.slice(0, 3).join('');
  const b = numbers.slice(3, 6).join('');
  const c = numbers.slice(6, 10).join('');
  return `(${a}) ${b}-${c}`;
}

// Alternative
// export function createPhoneNumber (numbers: number[]): string {
//   let phoneNumber = '(xxx) xxx-xxxx';
//   for (let i = 0; i < numbers.length; i++) {
//     phoneNumber = phoneNumber.replace('x', numbers[i].toString());
//   }
//   return phoneNumber;
// }

// Test
describe('Tests', () => {
  it('Should pass sample tests', () => {
    assert.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890');
    assert.equal(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), '(111) 111-1111');
    assert.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890');
  });
});

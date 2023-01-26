// Perimeter sequence

import { assert } from 'chai';

export function driver (data: Array<string>): string {
  const [firstName, middleName, lastName, birthday, gender] = data;
  let result = '';

  result += lastName.slice(0, 5).padEnd(5, '9');
  result += birthday.split('-')[2][2];
  result += getMonthBirth(birthday, gender);
  result += birthday.split('-')[0];
  result += birthday.split('-')[2][3];
  result += firstName[0];
  result += middleName[0] || '9';
  result += '9AA';

  return result.toUpperCase();
}

const getMonthBirth = (birthday: string, gender: string): string => {
  const [a, b] = (new Date(birthday).getMonth() + 1).toString().padStart(2, '0').split('').map(Number);
  return `${gender === 'F' ? a + 5 : a}${b}`;
};

let data;
describe('Sample Tests', function () {
  it('Should pass sample tests', function () {
    data = ['John', 'James', 'Smith', '01-Jan-2000', 'M'];
    assert.equal(driver(data), 'SMITH001010JJ9AA', "Should return 'SMITH001010JJ9AA'");

    data = ['Johanna', '', 'Gibbs', '13-Dec-1981', 'F'];
    assert.equal(driver(data), 'GIBBS862131J99AA', "Should return 'GIBBS862131J99AA'");

    data = ['Andrew', 'Robert', 'Lee', '02-September-1981', 'M'];
    assert.equal(driver(data), 'LEE99809021AR9AA', "Should return 'LEE99809021AR9AA'");
  });
});

// Authenticate a list of usernames

import { assert } from 'chai';

export function authList (arr:string[]):boolean {
  return arr.every(username => /(?=.*[a-z])(?=.*[0-9])(?=[a-z0-9]{6,10})/.test(username));
}

// Test
describe('solution', function () {
  it('fixed tests', function () {
    const usernames1 = ['john123', 'alex222', 'sandra1'];
    const usernames2 = ['john123', 'alex222', 'sandraW'];
    const usernames3 = ['john_123', 'alex222', 'sandra1'];
    const usernames4 = [''];
    const usernames5 = ['123456'];
    const usernames6 = ['abcdef'];

    assert.equal(authList(usernames1), true);
    assert.equal(authList(usernames2), false);
    assert.equal(authList(usernames3), false);
    assert.equal(authList(usernames4), false);
    assert.equal(authList(usernames5), false);
    assert.equal(authList(usernames6), false);
  });
});

// Two to One

import { assert } from 'chai';

export const longest = (s1:string, s2:string): string => {
  const combined = [...s1.split(''), ...s2.split('')];
  const unique = Array.from(new Set(combined));
  return unique.sort().sort().join('');
};

function testing (actual:string, expected:string) {
  assert.strictEqual(actual, expected);
}

describe('Fixed Tests', function () {
  it('Basic tests longest', function () {
    testing(longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
    testing(longest('loopingisfunbutdangerous', 'lessdangerousthancoding'), 'abcdefghilnoprstu');
    testing(longest('inmanylanguages', 'theresapairoffunctions'), 'acefghilmnoprstuy');
    testing(longest('lordsofthefallen', 'gamekult'), 'adefghklmnorstu');
  });
});

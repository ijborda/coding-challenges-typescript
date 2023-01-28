// Replace every nth

import { assert } from 'chai';

export function replaceNth (text:string, n:number, oldValue:string, newValue:string):string {
  if (n < 1 || n > text.length) {
    return text;
  }
  let nthOccurence = 0;
  return text.split('').map(a => {
    if (a === oldValue) {
      nthOccurence += 1;
      if (nthOccurence % n === 0) {
        return newValue;
      }
    }
    return a;
  }).join('');
}

describe('KataTest', function () {
  it('BasicTests', function () {
    assert.deepEqual(replaceNth('Vader said: No, I am your father!', 2, 'a', 'o'), 'Vader soid: No, I am your fother!');
    assert.deepEqual(replaceNth('Vader said: No, I am your father!', 4, 'a', 'o'), 'Vader said: No, I am your fother!');
    assert.deepEqual(replaceNth('Vader said: No, I am your father!', 6, 'a', 'o'), 'Vader said: No, I am your father!');
    assert.deepEqual(replaceNth('Vader said: No, I am your father!', 0, 'a', 'o'), 'Vader said: No, I am your father!');
    assert.deepEqual(replaceNth('Vader said: No, I am your father!', -2, 'a', 'o'), 'Vader said: No, I am your father!');
    assert.deepEqual(replaceNth('Vader said: No, I am your father!', 1, 'i', 'y'), 'Vader sayd: No, I am your father!');
    assert.deepEqual(replaceNth('Luke cries: Noooooooooooooooo!', 6, 'o', 'i'), 'Luke cries: Noooooioooooioooo!');
  });
});

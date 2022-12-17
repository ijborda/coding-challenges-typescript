// Don't give me five!

import { assert } from 'chai';

export function dontGiveMeFive (start:number, end:number) : number {
  const length = end - start + 1;
  const arrayNoFive = Array.from({ length }, (_, i) => i + start).filter(a => !a.toString().includes('5'));
  return arrayNoFive.length;
}

describe('KataTests', function () {
  it('exampleTests', function () {
    assert.equal(dontGiveMeFive(1, 9), 8);
    assert.equal(dontGiveMeFive(4, 17), 12);
  });
});

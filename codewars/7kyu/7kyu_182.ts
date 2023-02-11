// Genetic Algorithm Series - #2 Mutation

import { assert } from 'chai';

export const mutate = (chromosome: string, p: number): string => {
  return chromosome.split('').map(a => {
    const isMutate = Math.random() <= p;
    if (isMutate) {
      return a === '0' ? '1' : '0';
    }
    return a;
  }).join('');
};

// Test
describe('mutate', () => {
  const zero = '0'.repeat(9);
  const one = '1'.repeat(9);

  it('100% mutate', () => {
    assert.equal(mutate(zero, 1), one);
    assert.equal(mutate(one, 1), zero);
  });

  it('0% mutate', () => {
    assert.equal(mutate(zero, 0), zero);
    assert.equal(mutate(one, 0), one);
  });

  it('50% mutate', () => {
    assert(mutate(zero, 0.5).split('').some(x => x === '1'));
    assert(mutate(one, 0.5).split('').some(x => x === '1'));
  });
});

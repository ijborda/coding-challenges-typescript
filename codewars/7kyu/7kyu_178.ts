// Genetic Algorithm Series - #3 Crossover

import { assert } from 'chai';

export const crossover = (c1: string, c2: string, i: number) => {
  return [
    c1.slice(0, i) + c2.slice(i),
    c2.slice(0, i) + c1.slice(i)
  ];
};

// Test
describe('crossover', () => {
  it('Basic tests', () => {
    assert(crossover('110', '001', 2)[0] === '111' && crossover('110', '001', 2)[1] === '000');
    assert(crossover('111000', '000110', 3)[0] === '111110' && crossover('111000', '000110', 3)[1] === '000000');
  });
});

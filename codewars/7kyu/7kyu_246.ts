// List of all Rationals

import { assert } from 'chai';

export function * allRationals (): IterableIterator<number[]> {
  const root = [1, 1];
  yield root;

  let generationNew = [root];
  let generationNumber = 0;

  while (true) {
    const generationCurrent = generationNew.slice();
    generationNew = [];
    for (let i = 0; i < Math.pow(2, generationNumber); i++) {
      const node = generationCurrent[i];

      const left = [node[0], node[0] + node[1]];
      generationNew.push(left);
      yield left;

      const right = [node[0] + node[1], node[1]];
      generationNew.push(right);
      yield right;
    }
    generationNumber++;
  }
}

// Alternative 1:
// export function * allRationals (): IterableIterator<number[]> {
//   const root = [1, 1];
//   const rationals = [root];

//   let i = 0;
//   while (true) {
//     yield rationals[i];

//     const node = rationals[i];
//     rationals.push([node[0], node[0] + node[1]]);
//     rationals.push([node[0] + node[1], node[1]]);

//     i++;
//   }
// }

// Alternative 2:
// export function * allRationals (): IterableIterator<number[]> {
//   yield [1, 1];
//   for (const [a, b] of allRationals()) {
//     yield [a, a + b];
//     yield [a + b, b];
//   }
// }

// Test
describe('List of all Rationals', () => {
  const gen = allRationals();
  const a = [...Array(100001)].map(() => gen.next().value);
  it('Basic tests', () => {
    assert.deepStrictEqual(a[0], [1, 1]);
    assert.deepStrictEqual(a[3], [1, 3]);
    assert.deepStrictEqual(a[4], [3, 2]);
    assert.deepStrictEqual(a[10], [5, 2]);
  });
  it('Larger indices', () => {
    assert.deepStrictEqual(a[100], [19, 12]);
    assert.deepStrictEqual(a[1000], [39, 28]);
    assert.deepStrictEqual(a[10000], [205, 162]);
    assert.deepStrictEqual(a[100000], [713, 586]);
  });
});

// Calculate mean and concatenate string

import { assert } from 'chai';

export function mean (lst: string[]): [number, string] {
  const [sum, word] = lst.reduce((acc, a) => {
    if (/\d/.test(a)) {
      acc[0] += Number(a);
    } else {
      acc[1] += a;
    }
    return acc;
  }, [0, '']);
  return [sum / 10, word];
}

describe('solution', function () {
  it('Basic Tests', function () {
    let lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0'];
    console.log(`Testing  ${lst}`);
    assert.equal(JSON.stringify(mean(lst)), JSON.stringify([3.6, 'udiwstagwo']));
    lst = ['0', 'c', '7', 'x', '6', '2', '3', '5', 'w', '7', '0', 'y', 'v', 'u', 'h', 'i', 'n', 'u', '0', '0'];
    console.log(`Testing  ${lst}`);
    assert.equal(JSON.stringify(mean(lst)), JSON.stringify([3.0, 'cxwyvuhinu']));
    lst = ['0', 'u', 'a', 'y', '0', 'a', '9', 'q', '3', 'v', 'g', '7', '6', '4', 'y', 'd', '8', '6', '0', 'd'];
    console.log(`Testing  ${lst}`);
    assert.equal(JSON.stringify(mean(lst)), JSON.stringify([4.3, 'uayaqvgydd']));
    lst = ['s', 'n', '9', 'l', '0', 'm', 'i', 'z', '9', '7', 'y', '4', 'z', '3', '3', 'k', '4', '1', '0', 'k'];
    console.log(`Testing  ${lst}`);
    assert.equal(JSON.stringify(mean(lst)), JSON.stringify([4.0, 'snlmizyzkk']));
    lst = ['5', 'v', 'u', 'k', '8', '4', '9', 'b', '9', 'g', '5', 'z', '3', 'f', '6', 'u', 'i', '6', '6', 't'];
    console.log(`Testing  ${lst}`);
    assert.equal(JSON.stringify(mean(lst)), JSON.stringify([6.1, 'vukbgzfuit']));
    lst = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0', 'a', 'a', 'd', 'd', 'g', 'q', 'u', 'v', 'y', 'y'];
    console.log(`Testing  ${lst}`);
    assert.equal(JSON.stringify(mean(lst)), JSON.stringify([0.9, 'aaddgquvyy']));
    lst = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 'a', 'a', 'd', 'd', 'g', 'q', 'u', 'v', 'y', 'y'];
    console.log(`Testing  ${lst}`);
    assert.equal(JSON.stringify(mean(lst)), JSON.stringify([1.0, 'aaddgquvyy']));
  });
});

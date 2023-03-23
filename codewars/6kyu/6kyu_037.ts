// Help the bookseller !

import { assert } from 'chai';

export const stockList = (listOfArt:string[], listOfCat:string[]):string => {
  const freq = listOfArt.reduce((acc, a) => {
    if (a[0] in acc) {
      acc[a[0]] += +a.split(' ')[1];
    } else {
      acc[a[0]] = +a.split(' ')[1];
    }
    return acc;
  }, {} as {[key: string]: number});

  if (listOfCat.every(cat => !freq[cat])) {
    return '';
  }

  return listOfCat.map(cat => `(${cat} : ${freq[cat] || 0})`).join(' - ');
};

// Test
function testing (listOfArt:string[], listOfCat:string[], expected:string) {
  assert.strictEqual(stockList(listOfArt, listOfCat), expected);
}
describe('Fixed Tests', function () {
  let b:string[], c:string[], res:string;
  // it('Basic tests stockList 1', function () {
  //   b = ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
  //   c = ['A', 'B', 'C', 'D'];
  //   res = '(A : 0) - (B : 1290) - (C : 515) - (D : 600)';
  //   testing(b, c, res);
  // });
  it('Basic tests stockList 2', function () {
    b = [];
    c = ['B', 'R', 'D', 'X'];
    res = '';
    testing(b, c, res);
  });
});

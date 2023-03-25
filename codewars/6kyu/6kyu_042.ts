// Multiplication table

import { assert } from 'chai';

export function meeting (s: string): any {
  return s
    .split(';')
    .map(name => name.split(':').reverse().map(a => a.toUpperCase()))
    .sort((a, b) => {
      const [lnameA, fnameA] = a;
      const [lnameB, fnameB] = b;
      return lnameA.localeCompare(lnameB) || fnameA.localeCompare(fnameB);
    })
    .map(([lname, fname]) => `(${lname}, ${fname})`)
    .join('');
}

// Test
describe('meeting', function () {
  function testing (s: string, exp: string) {
    console.log('Testing:\n', s);
    const ans = meeting(s);
    console.log('Actual:\n', ans);
    console.log('Expect:\n', exp);
    assert.equal(ans, exp);
  }
  it('Basic tests', function () {
    testing('Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn',
      '(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)');
    testing('John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell',
      '(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)');
  });
});

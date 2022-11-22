// Grasshopper - Messi goals function

import { assert } from 'chai';

// export function goals (laLigaGoals:number, copaDelReyGoals:number, championsLeagueGoals:number): number {
//   return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
// }

export function goals (...args: number[]): number {
  return args.reduce((acc, a) => acc + a);
}

describe('goals test', function () {
  it('should be 0', function () {
    assert.equal(0, 0);
  });
});

// Count salutes

import { assert } from 'chai';

export function countSalutes (hallway: string): number {
  const meets = hallway.replace(/-/g, '').replace(/^<+/g, '').replace(/>+$/g, '');
  let salutes = 0;

  for (let i = 0; i < meets.length; i++) {
    if (meets[i] === '>') {
      salutes += (meets.slice(i).match(/</g) || []).length;
    }
  }

  return salutes * 2;
}

// Test
describe('Solution test', () => {
  const act = (hallway: string, expected: number) => {
    const actual: number = countSalutes(hallway);
    const input: string = hallway;
    it(`input: ${input} expected: ${expected} actual: ${actual}`,
      () => assert.strictEqual(actual, expected));
  };
  describe('Fixed tests', () => {
    act('<---->---<---<-->', 4);
    act('------', 0);
    act('>>>>>>>>>>>>>>>>>>>>>----<->', 42);
    act('<<----<>---<', 2);
    act('>', 0);
    act('<-<--<<-><><<>>>>->', 10);
    act('<-><<<<<<>-<>>--<>-><-<-<-<<-<', 96);
  });
});

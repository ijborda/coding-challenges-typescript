// Going to the cinema

import { assert } from 'chai';

export function movie (card: number, ticket: number, perc: number): number {
  let s1 = 0;
  let s2 = card;
  let numTickets = 0;

  while (!(Math.ceil(s2) < s1)) {
    numTickets += 1;
    s1 += ticket;
    s2 += ticket * Math.pow(perc, numTickets);
  }

  return numTickets;
}

function testing (card:number, ticket:number, perc:number, expected:number) {
  assert.strictEqual(movie(card, ticket, perc), expected);
}

describe('Fixed Tests movie', function () {
  it('Basic tests', function () {
    testing(500, 15, 0.9, 43);
    testing(100, 10, 0.95, 24);
    testing(0, 10, 0.95, 2);
  });
});

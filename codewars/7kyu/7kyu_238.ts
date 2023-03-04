// Playing Cards Draw Order – Part 1

import { expect } from 'chai';
import * as chai from 'chai';

export const draw = (deck: string[]): string[] => {
  const drawingDeck = [...deck]; // Avoid mutating original array

  const drawnCards: string[] = [];
  const numCards = drawingDeck.length;

  for (let i = 0; i < numCards; i++) {
    const top = drawingDeck.shift();
    if (top) {
      drawnCards.push(top);
    }
    const nextTop = drawingDeck.shift();
    if (nextTop) {
      drawingDeck.push(nextTop);
    }
  }

  return drawnCards;
};

// Test
chai.config.truncateThreshold = 0;

describe('draw kings and queens', () => {
  it('should return kings and queens in order', () => {
    const deck = ['KC', 'KH', 'QC', 'KS', 'KD', 'QH', 'QD', 'QS'];
    const drawn = ['KC', 'QC', 'KD', 'QD', 'KH', 'QH', 'KS', 'QS'];

    expect(draw(deck)).to.deep.equal(drawn);
  });
});

// Smoking Timmy

import { assert } from 'chai';

export function startSmoking (bars: number, boxes: number): number {
  const CIGARS_ON_BOX = 18;
  const CIGARS_ON_BAR = CIGARS_ON_BOX * 10;

  const cigarsTotal = (bars * CIGARS_ON_BAR) + (boxes * CIGARS_ON_BOX);

  return cigarsTotal + cigarFromStub(0, cigarsTotal);
}

const cigarFromStub = (cigar: number, stub: number): number => {
  const STUBS_TO_MAKE_CIGAR = 5;

  if (stub < STUBS_TO_MAKE_CIGAR) {
    return cigar;
  }

  const newCigarFromStubs = Math.floor(stub / STUBS_TO_MAKE_CIGAR);
  const newStubsTotal = newCigarFromStubs + (stub % STUBS_TO_MAKE_CIGAR);

  return cigarFromStub(cigar + newCigarFromStubs, newStubsTotal);
};

// Test
describe('Example Cases', function () {
  it('startSmoking(0,1) should return 22', function () {
    assert.deepEqual(startSmoking(0, 1), 22);
  });

  it('startSmoking(1,0) should return 224', function () {
    assert.deepEqual(startSmoking(1, 0), 224);
  });

  it('startSmoking(1,1) should return 247', function () {
    assert.deepEqual(startSmoking(1, 1), 247);
  });
  it('startSmoking(10,2) should return 2294', function () {
    assert.deepEqual(startSmoking(10, 2), 2294);
  });
  it('More tests', function () {
    assert.deepEqual(startSmoking(0, 0), 0);
    assert.deepEqual(startSmoking(1, 0), 224);
    assert.deepEqual(startSmoking(1, 1), 247);
    assert.deepEqual(startSmoking(10, 2), 2294);
  });
});

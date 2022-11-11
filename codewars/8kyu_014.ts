// Filter out the geese

import { assert } from 'chai';

function gooseFilter (birds: string[]): string[] {
  const geese: Array<string> = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  return birds.filter(a => !geese.includes(a));
}

// Test
describe('Basic tests', function () {
  it('Mixed list', function () {
    assert.deepEqual(gooseFilter(['Mallard', 'Hook Bill', 'African', 'Crested', 'Pilgrim', 'Toulouse', 'Blue Swedish']), ['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish']);
  });
  it('No geese', function () {
    assert.deepEqual(gooseFilter(['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested']), ['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested']);
  });
  it('All geese', function () {
    assert.deepEqual(gooseFilter(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']), []);
  });
});

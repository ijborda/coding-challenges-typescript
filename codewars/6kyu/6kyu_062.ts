// Coordinates Validator

import { assert } from 'chai';

export function isValidCoordinates (coordinates: string):boolean {
  const [lat, long] = coordinates.split(', ');
  const isValidLat = Math.abs(+lat) > 0 && Math.abs(+lat) < 90;
  const isValidLong = Math.abs(+long) > 0 && Math.abs(+long) < 180;
  return isValidLat && isValidLong;
}

// Test
describe('solution', function () {
  it('exampleTests', function () {
    const ValidCoordinates = [
      '-23, 25',
      '4, -3',
      '24.53525235, 23.45235',
      '04, -23.234235',
      '43.91343345, 143'
    ];
    for (let i = 0; i < ValidCoordinates.length; i++) {
      assert.equal(isValidCoordinates(ValidCoordinates[i]), true, ValidCoordinates[i] + ' validation failed.');
    }

    const InvalidCoordinates = [
      '23.234, - 23.4234',
      '2342.43536, 34.324236',
      'N23.43345, E32.6457',
      '99.234, 12.324',
      '6.325624, 43.34345.345',
      '0, 1,2',
      '0.342q0832, 1.2324',
      '23.245, 1e1'
    ];
    for (let i = 0; i < ValidCoordinates.length; i++) {
      assert.equal(isValidCoordinates(InvalidCoordinates[i]), false, InvalidCoordinates[i] + ' validation failed.');
    }
  });
});

// Grasshopper - Debug

import { assert } from 'chai';

export function weatherInfo (temp: number): string {
  enum Temp {
    FREEZING = 'is freezing temperature',
    ABOVEFREEZING = 'is above freezing temperature'
  }
  const c = convertToCelsius(temp);
  return `${+c.toFixed(5)} ${c < 0 ? Temp.FREEZING : Temp.ABOVEFREEZING}`;
}

export function convertToCelsius (temperature: number): number {
  return (temperature - 32) * (5 / 9);
}

// Test
describe('Celsius converter', () => {
  it('should get correct answer', () => {
    assert.equal(weatherInfo(50), '10 is above freezing temperature');
    assert.equal(weatherInfo(23), '-5 is freezing temperature');
    assert.equal(weatherInfo(56), '13.33333 is above freezing temperature');
  });
});

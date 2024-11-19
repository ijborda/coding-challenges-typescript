// Human Readable Time

import { assert } from 'chai';

const HEX_BASE = 16;
const HEX_COLOR_MIN = 0;
const HEX_COLOR_MAX = 255;

const cleanRgb = (num: number) => {
  if (num < HEX_COLOR_MIN) return HEX_COLOR_MIN;
  if (num > HEX_COLOR_MAX) return HEX_COLOR_MAX;
  return num;
};

const toHex = (num: number) => {
  return num.toString(HEX_BASE).toUpperCase().padStart(2, '0');
};

export function rgb (r: number, g: number, b: number): string {
  return [r, g, b].map(cleanRgb).map(toHex).join('');
}

// Test
describe('Tests', function () {
  it('Basic Tests', function () {
    assert.strictEqual(rgb(0, 0, 0), '000000');
    assert.strictEqual(rgb(0, 0, -20), '000000');
    assert.strictEqual(rgb(300, 255, 255), 'FFFFFF');
    assert.strictEqual(rgb(173, 255, 47), 'ADFF2F');
  });
});

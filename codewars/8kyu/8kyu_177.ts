// Find the Squares

import { assert } from 'chai';

export function wallpaper (l: number, w: number, h: number): string {
  const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const WALLPAPER_AREA = 5.2;

  if (!(l * w * h)) {
    return NUMBERS[0];
  }

  const wallArea = 2 * h * (w + l);
  const neededWallpaper = Math.ceil((wallArea / WALLPAPER_AREA) * 1.15);

  return NUMBERS[neededWallpaper];
}

describe('Fixed Tests wallpaper', function () {
  it('Basic tests', function () {
    assert.strictEqual(wallpaper(6.3, 4.5, 3.29), 'sixteen');
    assert.strictEqual(wallpaper(6.3, 5.8, 3.13), 'seventeen');
    assert.strictEqual(wallpaper(6.1, 6.7, 2.81), 'sixteen');
    assert.strictEqual(wallpaper(6.1, 2.0, 3.15), 'twelve');
    assert.strictEqual(wallpaper(4.4, 3.0, 2.75), 'ten');
    assert.strictEqual(wallpaper(7.9, 5.4, 0.0), 'zero');
    assert.strictEqual(wallpaper(7.9, 0.0, 5.4), 'zero');
  });
});

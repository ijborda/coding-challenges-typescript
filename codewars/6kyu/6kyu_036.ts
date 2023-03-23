// Make the Deadfish Swim

import { assert } from 'chai';

/** return the output array and ignore all non-op characters */
export function parse (data: string): number[] {
  const out: number[] = [];
  let val = 0;

  data.split('').forEach(command => {
    switch (command) {
      case 'i':
        val++;
        break;
      case 'd':
        val--;
        break;
      case 's':
        val = val ** 2;
        break;
      case 'o':
        out.push(val);
        break;
      default:
        break;
    }
  });

  return out;
}

// Test
describe('example', function () {
  it('test', function () {
    assert.deepEqual(parse('iiisdoso'), [8, 64]);
    assert.deepEqual(parse('iiisxxxdoso'), [8, 64]);
  });
});

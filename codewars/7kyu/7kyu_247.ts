// List of all Rationals

import { assert } from 'chai';

export function mapVector (vector: [number, number], circle1: [number, number, number], circle2: [number, number, number]): [number, number] {
  const [x1, y1] = vector;
  const [c1x, c1y, c1r] = circle1;
  const [c2x, c2y, c2r] = circle2;

  const c1xAdj = x1 - c1x;
  const c1yAdj = y1 - c1y;

  let angle = Math.atan(c1yAdj / c1xAdj);
  if ((c1xAdj < 0 && c1xAdj) < 0 || (c1xAdj < 0 && c1yAdj > 0)) {
    angle += Math.PI;
  } else if (c1xAdj > 0 && c1yAdj < 0) {
    angle += 2 * Math.PI;
  }

  const dist1 = Math.hypot(c1xAdj, c1yAdj);
  const dist2 = dist1 * c2r / c1r;

  const x2 = dist2 * Math.cos(angle) + c2x;
  const y2 = dist2 * Math.sin(angle) + c2y;

  return [x2, y2];
}

// Alternative 1
// export function mapVector (vector: [number, number], circle1: [number, number, number], circle2: [number, number, number]): [number, number] {
//   const [x1, y1] = vector;
//   const [c1x, c1y, c1r] = circle1;
//   const [c2x, c2y, c2r] = circle2;

//   const distx = (x1 - c1x) * c2r / c1r;
//   const disty = (y1 - c1y) * c2r / c1r;

//   const x2 = distx + c2x;
//   const y2 = disty + c2y;

//   return [x2, y2];
// }
// mapVector([5, 5], [10, 20, 42], [-100, -42, 69]);

// Test:
const margin = 0.01;
describe('Basic tests', function () {
  it('Should handle simple cases', () => {
    const examples = [
      {
        input: [[46, 58], [0, 0, 100], [0, 0, 100]],
        output: [46, 58]
      },
      {
        input: [[50, 88], [-25, 128, 100], [50, 50, 100]],
        output: [125, 10]
      },
      {
        input: [[120, 58], [100, 76, 36], [120, -62, 50]],
        output: [147.78, -87.0]
      },
      {
        input: [[5, 5], [10, 20, 42], [-100, -42, 60]],
        output: [-107.14, -63.43]
      }
    ];

    for (const example of examples) {
      const got = mapVector(<[number, number]>example.input[0], <[number, number, number]>example.input[1], <[number, number, number]>example.input[2]);
      const expected = <[number, number]>example.output;
      assert.approximately(got[0], expected[0], margin,
        `x coordinate is off - ${got[0]} is not ${expected[0]}. Error margin: ${margin}.`
      );
      assert.approximately(got[1], expected[1], margin,
        `y coordinate is off - ${got[1]} is not ${expected[1]}. Error margin: ${margin}.`
      );
    }
  });
});

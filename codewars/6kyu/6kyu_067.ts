// Color Choice
import { assert } from 'chai';

export function checkchoose (m: number, n: number): number {
  if (m === 0) return -1;
  if (m === 1) return 0;

  const choices = Array.from({ length: Math.floor(n / 2) }).map((_, i) => i + 1);
  for (const x of choices) {
    const currentM = choose(n, x);
    if (currentM === m) return x;
    if (currentM > m) break;
  }

  return -1;
}

function factorial (n: number): number {
  return Array.from({ length: n })
    .map((_, i) => i + 1)
    .reduce((acc, a) => acc * a, 1);
}

function product (n: number[]): number {
  return n.reduce((acc, a) => acc * a, 1);
}

function choose (n: number, x: number): number {
  const nume = product(Array.from({ length: x }).map((_, i) => i + n - x + 1));
  const deno = factorial(x);
  return Math.round(nume / deno);
}

// export const checkchoose = (m: number, n: number): number => {
//   let currentM = 1;
//   let x = 0;
//   while (x <= n / 2) {
//     if (currentM === m) return x;
//     currentM = currentM * (n - x) / (x + 1);
//     x++;
//   }
//   return -1;
// };

// Test
describe('Fixed Tests checkchoose', function () {
  it('Basic tests', function () {
    assert.strictEqual(checkchoose(6, 4), 2);
    assert.strictEqual(checkchoose(4, 4), 1);
    assert.strictEqual(checkchoose(4, 2), -1);
    assert.strictEqual(checkchoose(35, 7), 3);
    assert.strictEqual(checkchoose(36, 7), -1);
    assert.strictEqual(checkchoose(47129212243960, 50), 20);
    assert.strictEqual(checkchoose(47129212243961, 50), -1);
  });
});

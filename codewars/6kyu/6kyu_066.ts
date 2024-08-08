// Roman Numerals Encoder
import { assert } from 'chai';

export function solution (n: number): string {
  const map = Object.entries({
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }).reverse().map(m => [parseInt(m[0]), m[1]] as [number, string]);

  let ans = '';
  while (n > 0) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [val, sym] = map.find(m => n >= m[0])!;
    ans += sym;
    n -= val;
  }
  return ans;
}

// Test
describe('solution', function () {
  it('basic', function () {
    assert.strictEqual(solution(1000), 'M');
    assert.strictEqual(solution(4), 'IV');
    assert.strictEqual(solution(1), 'I');
    assert.strictEqual(solution(1990), 'MCMXC');
    assert.strictEqual(solution(2008), 'MMVIII');
    assert.strictEqual(solution(1444), 'MCDXLIV');
  });
});

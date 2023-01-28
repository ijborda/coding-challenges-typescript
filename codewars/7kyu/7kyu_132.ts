// Find the calculation type

import { assert } from 'chai';

export function calcType (a: number, b: number, res: number): string {
  enum OPERATION {
    ADDITION = 'addition',
    SUBTRACT = 'subtraction',
    MULTIPLY = 'multiplication',
    DIVISION = 'division'
  }
  switch (res) {
    case (a + b):
      return OPERATION.ADDITION;
    case (a - b):
      return OPERATION.SUBTRACT;
    case (a * b):
      return OPERATION.MULTIPLY;
    case (a / b):
      return OPERATION.DIVISION;
    default:
      return 'Invalid';
  }
}

describe('Calculation type', () => {
  it('Fixed test for addition', () => {
    assert.strictEqual(calcType(1, 2, 3), 'addition');
  });
  it('Fixed test for multiplication', () => {
    assert.strictEqual(calcType(10, 4, 40), 'multiplication');
  });
  it('Fixed test for subtraction', () => {
    assert.strictEqual(calcType(10, 5, 5), 'subtraction');
  });
  it('Fixed test for division', () => {
    assert.strictEqual(calcType(9, 5, 1.8), 'division');
  });
});

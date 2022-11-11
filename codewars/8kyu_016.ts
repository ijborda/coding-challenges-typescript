// Calculate BMI

import { assert } from 'chai';

function bmi (weight: number, height: number): string {
  enum BMI {
    UNDERWEIGHT = 'Underweight',
    NORMAL = 'Normal',
    OVERWEIGHT = 'Overweight',
    OBESE = 'Obese'
  }

  const bmiVal = weight / height ** 2;

  if (bmiVal <= 18.5) {
    return BMI.UNDERWEIGHT;
  } if (bmiVal <= 25.0) {
    return BMI.NORMAL;
  } else if (bmiVal <= 30.0) {
    return BMI.OVERWEIGHT;
  } else {
    return BMI.OBESE;
  }
}

// Test
describe('Kata.bmi', function () {
  it('should pass a sample test according to the specifications provided', function () {
    assert.strictEqual(bmi(80, 1.80), 'Normal');
  });
});

// AD2070: Help Lorimar troubleshoot his robots- ultrasonic distance analysis

import { assert } from 'chai';
import * as chai from 'chai';

export type SensorLog = ['Distance:', number, 'Meters', string];
export type SensorLogs = SensorLog[];

export function sensorAnalysis (sensorData: SensorLogs): [number, number] {
  const data = sensorData.map(s => s[1]);

  const average = data.reduce((acc, a) => acc + a, 0) / data.length;
  const variance = data.reduce((acc, a) => acc + Math.pow(a - average, 2), 0) / (data.length - 1);
  const stdv = Math.sqrt(variance);

  return [round(average, 4), round(stdv, 4)];
}

const round = (num: number, digits: number): number => {
  return +num.toFixed(digits);
};

// Test
chai.config.truncateThreshold = 0;
describe('solution', function () {
  it('Basic Tests', function () {
    const sensorData1: SensorLogs = [['Distance:', 116.28, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 117.1, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 123.96, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 117.17, 'Meters', 'Sensor 5 malfunction =>lorimar']];
    assert.deepEqual(sensorAnalysis(sensorData1), [118.6275, 3.5779]);
    const sensorData2: SensorLogs = [['Distance:', 295.68, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.78, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 298.21, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.84, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 296.54, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 133.84, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.41, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.82, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 134.61, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.86, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.88, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.87, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.47, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 135.5, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.9, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.08, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 171.36, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.08, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.92, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.88, 'Meters', 'Sensor 5 malfunction =>lorimar']];
    assert.deepEqual(sensorAnalysis(sensorData2), [215.2265, 68.4014]);
  });
});

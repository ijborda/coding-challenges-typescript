// Ranking position

import { assert } from 'chai';
import * as chai from 'chai';

export type inputMan = {
  name: string,
  points: number,
};

export type outputMan = {
  name: string,
  points: number,
  position: number,
};

export function ranking (people: inputMan[]): any[] {
  const peopleSorted = people
    .sort((a, b) => b.points - a.points || a.name.localeCompare(b.name))
    .map(p => Object.assign(p, { position: null })); // Placeholder position

  return peopleSorted.map((p, i, arr) => {
    const isTieWithPrevious = (): boolean => i !== 0 && p.points === arr[i - 1].points;
    const position = isTieWithPrevious() ? arr[i - 1].position : i + 1;
    return Object.assign(p, { position });
  });
}

// Test
chai.config.truncateThreshold = 0;
describe('ranking', function () {
  it('Basic test, no. 1', () => {
    const input: inputMan[] = [
      {
        name: 'John',
        points: 100
      },
      {
        name: 'Bob',
        points: 130
      },
      {
        name: 'Mary',
        points: 120
      },
      {
        name: 'Kate',
        points: 120
      }
    ];

    const output: outputMan[] = [
      {
        name: 'Bob',
        points: 130,
        position: 1
      },
      {
        name: 'Kate',
        points: 120,
        position: 2
      },
      {
        name: 'Mary',
        points: 120,
        position: 2
      },
      {
        name: 'John',
        points: 100,
        position: 4
      }
    ];

    assert.deepEqual(ranking(input), output);
  });

  it('Basic test, no. 2', () => {
    const input: inputMan[] = [
      {
        name: 'Bob',
        points: 130
      },
      {
        name: 'Mary',
        points: 120
      },
      {
        name: 'John',
        points: 100
      }
    ];

    const output: outputMan[] = [
      {
        name: 'Bob',
        points: 130,
        position: 1
      },
      {
        name: 'Mary',
        points: 120,
        position: 2
      },
      {
        name: 'John',
        points: 100,
        position: 3
      }
    ];

    assert.deepEqual(ranking(input), output);
  });

  it('Basic test, no. 3', () => {
    const input: inputMan[] = [
      {
        name: 'Bob',
        points: 100
      },
      {
        name: 'Mary',
        points: 100
      },
      {
        name: 'John',
        points: 100
      }
    ];

    const output: outputMan[] = [
      {
        name: 'Bob',
        points: 100,
        position: 1
      },
      {
        name: 'John',
        points: 100,
        position: 1
      },
      {
        name: 'Mary',
        points: 100,
        position: 1
      }
    ];

    assert.deepEqual(ranking(input), output);
  });

  it('Basic test, no. 4', () => {
    const input: inputMan[] = [
      {
        name: 'John',
        points: 100
      }
    ];

    const output: outputMan[] = [
      {
        name: 'John',
        points: 100,
        position: 1
      }
    ];

    assert.deepEqual(ranking(input), output);
  });

  it('Basic test, no. 5', () => {
    const input: inputMan[] = [];
    const output: outputMan[] = [];

    assert.deepEqual(ranking(input), output);
  });
});

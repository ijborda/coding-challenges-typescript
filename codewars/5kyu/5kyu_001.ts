// Binary Genetic Algorithms

import { assert } from 'chai';

export class GeneticAlgorithm {
  private popSize = 100;

  generate (length: number): string {
    return Array.from({ length })
      .map(_ => this.rndBool() ? '1' : '0')
      .join('');
  }

  select (population: string[], fitnesses: number[], numToSelect = 2): string[] {
    const selected: string[] = [];

    let probDist = this.createProbDist(population, fitnesses);
    while (selected.length < numToSelect) {
      const rnd = this.rndNum(0, probDist.slice(-1)[0].prob);
      const pickedIndex = Math.max(probDist.findIndex(a => rnd < a.prob), 0);
      selected.push(probDist[pickedIndex].chromosome);
      // Remove the picked chromosome for the next round
      probDist = this.createProbDist(population, fitnesses, pickedIndex);
    }

    return selected;
  }

  mutate (chromosome: string, p: number): string {
    return chromosome
      .split('')
      .map(c => {
        const isMutate = this.rndBool(p);
        const isZero = (isMutate && c === '1') || (!isMutate && c === '0');
        return isZero ? '0' : '1';
      })
      .join('');
  }

  crossover (chromosome1: string, chromosome2: string, crossOverPoint?: number): string[] {
    const crossPoint = crossOverPoint || this.rndInt(1, chromosome1.length);
    const c1 = chromosome1.split('');
    const c2 = chromosome2.split('');
    // Divide chromosome1 and chromosome2 to two parts each
    const c1Pt2 = c1.splice(crossPoint).join('');
    const c1Pt1 = c1.join('');
    const c2Pt2 = c2.splice(crossPoint).join('');
    const c2Pt1 = c2.join('');
    // Combine parts to make new chromosomes
    return [c1Pt1 + c2Pt2, c2Pt1 + c1Pt2];
  }

  run (fitness: (chromosome: string) => number, length: number, p_c: number, p_m: number, iterations = 100) {
    // Create initial population
    let currentPop = Array.from({ length: this.popSize }).map(_ => this.generate(length));

    // Perform iteration
    for (let i = 0; i < iterations; i++) {
      const currentFit = currentPop.map(p => fitness(p));

      // Check early exit
      const best = this.getBest(currentPop, currentFit);
      if (fitness(best) === 1) return best;

      // Initialize new population
      const newPop = [];

      // Generate childs
      while (newPop.length < this.popSize) {
        const [parent1, parent2] = this.select(currentPop, currentFit);
        const [child1, child2] = this.crossover(parent1, parent2);
        const child1Mutated = this.mutate(child1, p_m);
        const child2Mutated = this.mutate(child2, p_m);
        if (newPop.findIndex(a => a === child1Mutated) === -1) newPop.push(child1Mutated);
        if (newPop.findIndex(a => a === child2Mutated) === -1) newPop.push(child2Mutated);
      }

      // Trim new population in case it is more than the expected size
      currentPop = newPop.slice(0, this.popSize);
    }

    // Return best
    return this.getBest(currentPop, currentPop.map(p => fitness(p)));
  }

  private rndBool (p = 0.5): boolean {
    return Math.random() < p;
  }

  private rndInt (min = 1, max = 100): number {
    const rand = Math.floor(Math.random() * (max - min) + min);
    return rand;
  }

  private rndNum (min = 0, max = 1): number {
    const rand = Math.random() * (max - min) + min;
    return rand;
  }

  private getBest (population: string[], fitnesses: number[]): string {
    const popFitNessMap = population.map((chromosome, i) => ({
      chromosome,
      fitnesses: fitnesses[i]
    }));
    const { chromosome: bestChromosome } = popFitNessMap
      .sort((a, b) => b.fitnesses - a.fitnesses)[0];
    return bestChromosome;
  }

  private createProbDist (population: string[], fitnesses: number[], indexToRemove?: number) {
    let pop = population;
    let fit = fitnesses;
    if (indexToRemove) {
      pop = pop.filter((_, i) => i !== indexToRemove);
      fit = fit.filter((_, i) => i !== indexToRemove);
    }
    return pop
      .map((chromosome, i) => ({
        chromosome,
        prob: fit.slice(0, i + 1).reduce((acc, a) => acc + a, 0)
      }));
  }
}

// Test

describe('solution', () => {
  it('generate method', () => {
    const ga = new GeneticAlgorithm();
    assert.deepEqual(ga.generate(2).length, 2);
  });

  it('select method', () => {
    const ga = new GeneticAlgorithm();
    const pop = ['1', '2', '3', '4', '5'];
    const fit = [10, 200, 0, 100, 1];
    assert.deepEqual(ga.select(pop, fit).length, 2);
  });

  it('mutate method', () => {
    const ga = new GeneticAlgorithm();
    const c = '0000000000';
    const p = 1;
    assert.deepEqual(ga.mutate(c, p), '1111111111');
  });

  it('crossover method', () => {
    const ga = new GeneticAlgorithm();
    const p1 = 'abcdefghij';
    const p2 = '1234567890';
    const [c1, c2] = ga.crossover(p1, p2, 1);
    assert.deepEqual(c1, 'a234567890');
    assert.deepEqual(c2, '1bcdefghij');
  });

  it('run method', () => {
    const ga = new GeneticAlgorithm();
    const fitnessFn = (c: string): number => {
      const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const chrom = c.split('');
      const idealSum = 38;
      const idealPrd = 210;
      const cSum = list.filter((_, i) => chrom[i] === '1').reduce((acc, a) => acc + a, 0);
      const cPrd = list.filter((_, i) => chrom[i] === '0').reduce((acc, a) => acc * a, 1);
      const score = Math.sqrt(Math.pow(cSum - idealSum, 2) + Math.pow(cPrd - idealPrd, 2));
      return 1 / (score + 1);
    };
    const ans = ga.run(fitnessFn, 10, 0.6, 0.002);
    assert.deepEqual(ans.length, 10);
    assert.deepEqual(ans, '1001010111');
  });
});

import { strictEqual } from 'assert';
import { describe, it } from 'mocha';
import make from './make';

describe('make', () => {
  const sum = (a, b) => a + b;
  const multiply = (a, b) => a * b;

  describe('should work for different arrays', () => {
    it('one number', () => {
      strictEqual(make(5)(sum), 5);
    });

    it('arrays of 1', () => {
      strictEqual(make(5)(15)(sum), 20);
    });

    it('long arrays', () => {
      strictEqual(make(4, 5, 6, 7)(4, 5, 6, 7)(sum), 44);
    });

    it('arrays of different sizes', () => {
      strictEqual(make(3)(4, 5)(6, 7, 8)(sum), 33);
    });
  });

  describe('should work for different functions as a parameter', () => {
    it('multiply', () => {
      strictEqual(make(3, 4)(5)(multiply), 60);
    });
  });
});

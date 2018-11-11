const assert = require('assert');
const describe = require('mocha');
const it = require('mocha');
const make = require('../src/make.js');

describe('make', () => {
  const sum = (a, b) => a + b;
  const multiply = (a, b) => a * b;

  describe('should work for different arrays', () => {
    it('one number', () => {
      assert.strictEqual(make(5)(sum), 5);
    });

    it('arrays of 1', () => {
      assert.strictEqual(make(5)(15)(sum), 20);
    });

    it('long arrays', () => {
      assert.strictEqual(make(4, 5, 6, 7)(4, 5, 6, 7)(sum), 44);
    });

    it('arrays of different sizes', () => {
      assert.strictEqual(make(3)(4, 5)(6, 7, 8)(sum), 33);
    });
  });

  describe('should work for different functions as a parameter', () => {
    it('multiply', () => {
      assert.strictEqual(make(3, 4)(5)(multiply), 60);
    });
  });
});

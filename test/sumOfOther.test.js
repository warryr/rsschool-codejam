const assert = require('assert');
const describe = require('mocha');
const it = require('mocha');
const sumOfOther = require('../src/sumOfOther.js');

describe('sumOfOther', () => {
  it('array of 2', () => {
    const sum = sumOfOther([10, 15]);
    assert.strictEqual(sum, [15, 10]);
  });

  it('array of 4', () => {
    const sum = sumOfOther([4, 3, 1, 5]);
    assert.strictEqual(sum, [9, 10, 12, 8]);
  });

  it('array of 6', () => {
    const sum = sumOfOther([1, 3, 5, 2, 4, 6]);
    assert.strictEqual(sum, [20, 18, 16, 19, 17, 15]);
  });
});

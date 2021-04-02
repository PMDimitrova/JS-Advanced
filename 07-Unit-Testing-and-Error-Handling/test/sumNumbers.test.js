const { expect, assert } = require ('chai');
const { sum } = require('../04.Lab-SumOfNumbers/sumNumbers');

describe('Sum numbers', () => {
    it('sums single number', () => {
        expect(sum([1])).to.equal(1);
    })
    it('sums 2 numbers', () => {
        assert.equal(sum([1,2]), 3);
    })

});
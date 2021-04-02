const { expect, assert } = require ('chai');
const { createCalculator } = require('../00.Lab-Exercises/07.Add-Substract');

describe('unit tests', () => {
    let a = createCalculator();
    beforeEach(function () {
        a = createCalculator();
    });

    //test if the result have all of the options and the names are correct
    it('should have add', function () {
        expect(a).to.haveOwnProperty('add');
    });
    it('should have subtract', function () {
        expect(a).to.haveOwnProperty('subtract');
    });
    it('should have get', function () {
        expect(a).to.haveOwnProperty('subtract');
    });

    //test if the internal sum property can't be modified
    it('should be unmodifiable', function () {
       a.value += 1;
       expect(a.get()).to.equal(0);
    });

    //check if add and subtract fail when received string
    it('add should fail with string', function () {
        expect(a.add('a')).to.be.undefined;
    });
    it('subtract should fail with string', function () {
        expect(a.subtract('a')).to.be.undefined;
    });

    // //check if add and subtract succeed when received string, but with number inside
    it('add should succeed with string', function () {
        a.add('1');
        assert.equal(a.get(), 1);
    });
    it('subtract should succeed with string', function () {
        a.subtract('1');
        assert.equal(a.get(), -1);
    });

    //check if add and subtract perform correctly
    it('add should work correctly', function () {
        a.add(1);
        assert.equal(a.get(), 1);
    });
    it('subtract should work correctly', function () {
        a.subtract(1);
        assert.equal(a.get(), -1);
    });

    //check if get returns correct value
    it('should ', function () {
        assert.equal(a.get(), 0);
    });
    //check if returns Object
    it('should return object', function () {
        assert.isObject(a);
    });
})

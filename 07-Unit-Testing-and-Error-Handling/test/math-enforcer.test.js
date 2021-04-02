const { expect, assert } = require ('chai');
const { mathEnforcer } = require('../00.Ex-Ex/04.Math-Enforcer');

describe ('main function tests', function () {
    //test addFive-function
    it('should return 7', function () {
        assert.equal(mathEnforcer.addFive(2), 7);
    });
    it('should return undefined', function () {
        assert.isUndefined(mathEnforcer.addFive('a'));
    });
    it('should work with negatives', function () {
        assert.equal(mathEnforcer.addFive(-1), 4);
    });
    it('should work wit floating point nums', function () {
        assert.closeTo(mathEnforcer.addFive(1.1), 6.1, 0);
    });


    //test subtract10
    it('should return 0', function () {
        assert.equal(mathEnforcer.subtractTen(10), 0);
    });
    it('should return undefined', function () {
        assert.isUndefined(mathEnforcer.subtractTen('a'));
    });
    it('should work with negatives', function () {
        assert.equal(mathEnforcer.subtractTen(-1), -11);
    });
    it('should work wit floating point nums', function () {
        assert.closeTo(mathEnforcer.subtractTen(1.1), -8.9, 0);
    });


    //test sum
    it('should return 10', function () {
        assert.equal(mathEnforcer.sum(5, 5), 10);
    });
    it('should return undefined', function () {
        assert.isUndefined(mathEnforcer.sum('a', 2));
    });
    it('should work with negatives', function () {
        assert.equal(mathEnforcer.sum(-1, -3), -4);
    });
    it('should work wit floating point nums', function () {
        assert.closeTo(mathEnforcer.sum(1.1, 2.2), 3.3, 0.1);
    });


});
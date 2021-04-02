const { expect, assert } = require ('chai');
const { lookupChar } = require('../00.Ex-Ex/03.Char-lookup');

describe('main function tests', function () {
    //test with proper params
    it('should work with correct params', function () {
        assert.equal(lookupChar('abc', 1), 'b');
    });

    //test with incorrect params (string, index)
    it('should work with correct params', function () {
        assert.isUndefined(lookupChar('abc', 1.1));
    });

    it('should should return undefined', function () {
        assert.isUndefined(lookupChar({}, 1));
    });

    //test with index out of bounds -> -1 && above string.length
    it('should return incorrect index', function () {
        assert.equal(lookupChar('a', -1), 'Incorrect index');
    });

    it('should return incorrect index', function () {
        assert.equal(lookupChar('a', 3), 'Incorrect index');
    });

});
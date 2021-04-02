const { expect, assert } = require ('chai');
const { isOddOrEven } = require('../00.Ex-Ex/01.Even-or-odd');

describe('main function tests', function () {
    //pass non-strings and expect undefined
    it('should return undefined', function () {
        expect(isOddOrEven(123)).to.be.undefined;
    });

    //One where we pass a string with even length
    it('should return even', function () {
        expect(isOddOrEven('aa')).to.equal('even');
    });

    //And one where we pass a string with an odd length
    it('should return odd', function () {
        expect(isOddOrEven('aaa')).to.equal('odd');
    });

    //multiple different strings
    it('should return even', function () {
        expect(isOddOrEven('aa aab')).to.equal('even');
    });

    it('should return odd', function () {
        expect(isOddOrEven('aa aa')).to.equal('odd');
    });
});
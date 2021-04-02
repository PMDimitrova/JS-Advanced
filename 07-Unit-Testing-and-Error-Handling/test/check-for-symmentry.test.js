const { expect, assert } = require ('chai');
const { isSymmetric } = require('../00.Lab-Exercises/05.Check-for-Symmetry.js');

describe('check input', ()=>{
    it('check input for type - numbers ', function () {     //++
        expect(isSymmetric(123)).to.be.false;
    });
    it('check input for type - string ', function () {      //++
        expect(isSymmetric('123')).to.be.false;
    });
    it('returns true if an array is symmetrical', function () {    //++
        assert.equal(isSymmetric([1,2,3,3,2,1]), true);
    });
    it('returns false is non-symmetrical', function () {    //++
        assert.equal(isSymmetric([1,4,2,1]), false);
    });
    it('returns true with alphabetical array', function () {        //++
        assert.equal(isSymmetric(['a', 'b', 'a']), true);
    });
    it('returns false with non-sym alphabetical array', function () {
        assert.equal(isSymmetric(['a', 'b', 'c']), false);
    });
    it('returns false with empty array', function () {
        assert.equal(isSymmetric([]), true);
    });

    it('should return true with string and number', function () {
        assert.isFalse(isSymmetric([1, '1']));
    });
})
//odd-even
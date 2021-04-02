const { numberOperations } = require('./03. Number Operations_Resources');
const { expect, assert } = require ('chai');

describe ('Tests Num Operation', ()=>{
    describe('Test pow function', ()=>{
        it('Pows correctly', () => {
            assert.equal(numberOperations.powNumber(2), 4);
        });
    });
    describe('Test Number Checker', ()=>{
        it('It is not Parsing Nan', () =>{
            expect(numberOperations.numberChecker('ss')).to.throw(Error, 'The input is not a number!');
           // expect.throw() //not correct
        });
        it('Input is less than 100', () =>{
            assert.equal(numberOperations.numberChecker(95), 'The number is lower than 100!');
        });
        it('Input is greater than 100', () =>{
            assert.equal(numberOperations.numberChecker(101),'The number is greater or equal to 100!' );
        });

    });

    describe('Test sum Arrays', () =>{
        it('Test sum', () =>{
            assert.equal((numberOperations.sumArrays([1, 1], [2, 2])).toString(), ([3, 3]).toString());

        })
    });

} );
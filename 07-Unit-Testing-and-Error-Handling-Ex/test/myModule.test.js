const { add } = require('./myModule');
const {expect } = require ('chai');

describe ('Sum functions', ()=>{
    it('works', () => {
        expect(add(1,2)).to.equal(3);
    })
} );
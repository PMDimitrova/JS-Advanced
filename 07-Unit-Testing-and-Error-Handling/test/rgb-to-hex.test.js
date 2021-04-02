const { expect, assert } = require ('chai');
const { rgbToHexColor } = require('../00.Lab-Exercises/06.RGB-to-HEX');

describe('RGB to HEX', () =>{
    it ('returns undefined when not numerical input', () =>{
        assert.isUndefined(rgbToHexColor('red', 123, 123));
    });
    it ('returns undefined when not numerical input', () =>{
        assert.isUndefined(rgbToHexColor(123, 'red', 123));
    });
    it ('returns undefined when not numerical input', () =>{
        assert.isUndefined(rgbToHexColor(123, 123, 'red'));
    });

    it ('returns correct color', () =>{ //++
        assert.equal(rgbToHexColor(123, 123, 123), '#7b7b7b');
    });
    it ('returns false color', () =>{
       expect(rgbToHexColor(123, 123, 123)).to.not.equal('#7b7b6a')
    });

    it ('returns black', () =>{ //++
        assert.equal(rgbToHexColor(0, 0, 0), '#000000');
    });
    it ('returns white', () =>{ //++
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
    });

    it ('returns undefined when out of range input', () =>{
        assert.isUndefined(rgbToHexColor(999, 123, 123));
    });
    it ('returns undefined when out of range input', () =>{
        assert.isUndefined(rgbToHexColor(123, 999, 123));
    });
    it ('returns undefined when out of range input', () =>{
        assert.isUndefined(rgbToHexColor(123, 123, 999));
    });

    it ('returns undefined when out of range input', () =>{
        assert.isUndefined(rgbToHexColor(-1, 123, 123));
    });
    it ('returns undefined when out of range input', () =>{
        assert.isUndefined(rgbToHexColor(123, -1, 123));
    });
    it ('returns undefined when out of range input', () =>{
        assert.isUndefined(rgbToHexColor(123, 123, -1));
    });
});

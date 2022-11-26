const { expect, assert } = require('chai');
const lookupChar = require('./03.CharLookup');

describe('lookupChar function tests', () => {
    
    it('Return char at index', () => {
        assert(lookupChar('L', 0)=== 'L');
    });
    it('Return char at index', () => {
        assert(lookupChar('Love', 1)=== 'o');
    });

    it('Return incorrect index', () => {
        assert(lookupChar('Love', 10) === 'Incorrect index');
    });
    it('Negative incorrect index', () => {
        assert(lookupChar('Love', -10) === 'Incorrect index');
    });
    it('Return undefined with no string first parameter', () => {
        assert(lookupChar(100, 10) === undefined);
    });
    it('Return undefined with string first parameter and decimal second', () => {
        assert(lookupChar('Love', 10.5) === undefined);
    });
    it('Return undefined with wrong parameter type', () => {
        assert(lookupChar(100, 10.5) === undefined);
    });

});
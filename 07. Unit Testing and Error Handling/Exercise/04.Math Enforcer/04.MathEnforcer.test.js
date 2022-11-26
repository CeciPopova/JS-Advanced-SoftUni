const { assert } = require('chai');
const mathEnforcer = require('./04.MathEnforcer');

describe('MathEnforcer tests', () => {
   describe('addFive', () => {
    //tests with incorrect input
    it('should return undefined with string', () => {
        assert(mathEnforcer.addFive('TEST') === undefined)
    });
    it('should return undefined with an array', () => {
        assert(mathEnforcer.addFive([]) === undefined)
    });
    it('should return undefined with an object', () => {
        assert(mathEnforcer.addFive({}) === undefined)
    });
    it('should return undefined with undefined', () => {
        assert(mathEnforcer.addFive(undefined) === undefined)
    });
    it('should return undefined with null', () => {
        assert(mathEnforcer.addFive(null) === undefined)
    });
    //tests with correct input
    it('Positive integer number + 5', () => {
        assert(mathEnforcer.addFive(5)===10)
    });
    it('Negative number +5', () => {
        assert(mathEnforcer.addFive(-5) === 0);
    });
    it('Decimal number +5', () => {
        assert(mathEnforcer.addFive(5.5) === 10.5);
    });
    
   });
   describe('subtractTen', () => {
     //tests with incorrect input
     it('should return undefined with string', () => {
        assert(mathEnforcer.subtractTen('TEST') === undefined)
    });
    it('should return undefined with an array', () => {
        assert(mathEnforcer.subtractTen([]) === undefined)
    });
    it('should return undefined with an object', () => {
        assert(mathEnforcer.subtractTen({}) === undefined)
    });
    it('should return undefined with undefined', () => {
        assert(mathEnforcer.subtractTen(undefined) === undefined)
    });
    it('should return undefined with null', () => {
        assert(mathEnforcer.subtractTen(null) === undefined)
    });
    //tests with correct input
    it('Positive integer number ', () => {
        assert(mathEnforcer.subtractTen(25)===15)
    });
    it('Negative number ', () => {
        assert(mathEnforcer.subtractTen(-5) === -15);
    });
    it('Decimal number', () => {
        assert(mathEnforcer.subtractTen(15.5) === 5.5);
    });
   
    
   });
   describe('sum', () => {
    it('Two positive integer numbers', () => {
        assert(mathEnforcer.sum(10,20) === 30)
    });
    it('Two negative numbers', () => {
        assert(mathEnforcer.sum(-10,-20) === -30)
    });
    it('Two decimal numbers', () => {
        assert(mathEnforcer.sum(10.5,20.5) === 31)
    });

    it('first parameter string ,second - number, return undefined', () => {
        assert(mathEnforcer.sum('test', 7) === undefined);
    });
    it('first parameter number,second - string, return undefined', () => {
        assert(mathEnforcer.sum(7,'test') === undefined);
    });
   });
});


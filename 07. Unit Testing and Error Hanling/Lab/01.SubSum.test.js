const assert = require('assert').strict;
const { it } = require('mocha');
const solve = require('../01.SubSum');

describe('SubSum Calculator', () => {
    it('should calculate sub sum when end index is larger then length', () => {

        //Arrange
        let expectedSum = 150;
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex  = 3;
        let endIndex = 300;
    
    
        //Act
        let actualSum = solve(numbers, startIndex, endIndex);
    
        //Assert
        
        assert.equal(actualSum, expectedSum);
    });
    
    it('Shold calculate SubSum when startIndex is lower than 0', () => {
          //Arrange
          let expectedSum = 60;
          let numbers = [10, 20, 30, 40, 50, 60];
          let startIndex  = -100;
          let endIndex = 2;
      
      
          //Act
          let actualSum = solve(numbers, startIndex, endIndex);
      
          //Assert
          
          assert.equal(actualSum, expectedSum);
    });

})



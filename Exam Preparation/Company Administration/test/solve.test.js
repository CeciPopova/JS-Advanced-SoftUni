const companyAdministration = require('../companyAdministration');
const { assert } = require('chai');

describe("Tests companyAdministration", function() {
    describe("Tests for hiringEmployee", function() {

        it("If position value is invalid ", function() {
            assert.Throw(() => companyAdministration.hiringEmployee('John', 'Sale expert', 12),`We are not looking for workers for this position.`);
        });

        it('If yearsExperience is less than 3', () => {
            let expectedMesssage = `John is not approved for this position.`;
            let actual = companyAdministration.hiringEmployee('John', 'Programmer', 1);
            assert.equal(actual, expectedMesssage);
        });

        it('If yearsExperience is more or equal to 3', () => {
            let expectedMesssage =`John was successfully hired for the position Programmer.` ;
            let actual = companyAdministration.hiringEmployee('John', 'Programmer', 3);
            assert.equal(actual, expectedMesssage);
        });
     });

     describe('Tests for calculateSalary', () => {

        it('invalid input', () => {
            assert.Throw(() => companyAdministration.calculateSalary('hours'),"Invalid hours");
            assert.Throw(() => companyAdministration.calculateSalary(-564), "Invalid hours");
            assert.Throw(() => companyAdministration.calculateSalary([]),"Invalid hours");
            assert.Throw(() => companyAdministration.calculateSalary({}),"Invalid hours");
            assert.Throw(() => companyAdministration.calculateSalary(null),"Invalid hours");
            assert.Throw(() => companyAdministration.calculateSalary(undefined),"Invalid hours");
        });

        it('calculateSalary', () => {
            let expected = 1500;
            let actualSalary = companyAdministration.calculateSalary(100);
            assert.equal(actualSalary, expected);
        });

        it('calculateSalary with bonus', () => {
            let actualSalary = companyAdministration.calculateSalary(200);
            let expectedSalary = 4000;
            assert.equal(actualSalary, expectedSalary);
        });
     });

     describe('Tests for firedEmployee', () => {
        
        it('In case of submitted invalid parameters', () => {
            assert.Throw(() => companyAdministration.firedEmployee(15, 'John'), "Invalid input");
            assert.Throw(() => companyAdministration.firedEmployee([1, 2, 3], 'John'), "Invalid input");
            assert.Throw(() => companyAdministration.firedEmployee({}, 1), "Invalid input");
            assert.Throw(() => companyAdministration.firedEmployee(null, 'John'), "Invalid input");
        });
        
        it('firedEmployee works correctly', () => {
            let actual = companyAdministration.firedEmployee(['John', 'Micke', 'Anna', 'Nell'], 3);
            let expected = 'John, Micke, Anna';
            assert.equal(actual, expected);
        });

        it('If the index is outside the limits of the array', () => {
            assert.Throw(() => companyAdministration.firedEmployee(['John', 'Micke', 'Anna', 'Nell'], 4), "Invalid input");
            assert.Throw(() => companyAdministration.firedEmployee(['John', 'Micke', 'Anna', 'Nell'], -1), "Invalid input");
        });

     });
});

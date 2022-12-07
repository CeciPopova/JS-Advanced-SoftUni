const motorcycleRider = require('../Motorcycle Rider');
const { assert } = require('chai');

describe("Tests motorcycleRider", function () {
    describe("Tests for licenseRestriction", function () {
        it("If the input is invalid throw an error", function () {
            assert.Throw(() => motorcycleRider.licenseRestriction('Test'), "Invalid Information!");
            assert.Throw(() => motorcycleRider.licenseRestriction(3), "Invalid Information!");
            assert.Throw(() => motorcycleRider.licenseRestriction([]), "Invalid Information!");
            assert.Throw(() => motorcycleRider.licenseRestriction(undefined), "Invalid Information!");
        });

        it('If the category is AM', () => {
            let expected = "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.";
            let actual = motorcycleRider.licenseRestriction('AM');
            assert.equal(actual, expected);
        });

        it('If the category is A1', () => {
            let expected = "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.";
            let actual = motorcycleRider.licenseRestriction('A1');
            assert.equal(actual, expected);
        });

        it('If the category is A2', () => {
            let expected = "Motorcycles with maximum power of 35KW. and the minimum age is 18.";
            let actual = motorcycleRider.licenseRestriction('A2');
            assert.equal(actual, expected);
        });

        it('If the category is A', () => {
            let expected = "No motorcycle restrictions, and the minimum age is 24.";
            let actual = motorcycleRider.licenseRestriction('A');
            assert.equal(actual, expected);
        });
    });

    describe('Tests for motorcycleShowroom', () => {
        it('Invalid input', () => {
            assert.Throw(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"], 'Test'),   "Invalid Information!");
            assert.Throw(() => motorcycleRider.motorcycleShowroom('Test', 250),   "Invalid Information!");
            assert.Throw(() => motorcycleRider.motorcycleShowroom([], 250),   "Invalid Information!");
            assert.Throw(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"], 49),   "Invalid Information!");
            assert.Throw(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"], -1),   "Invalid Information!");
        });

        it('motorcycleShowroom works correctly', () => {
            let expected = `There are 2 available motorcycles matching your criteria!`;
            let actual = motorcycleRider.motorcycleShowroom(["125", "250", "600"], 400);
            assert.equal(actual, expected);
        });

        it('motorcycleShowroom works correctly', () => {
            let expected = `There are 0 available motorcycles matching your criteria!`;
            let actual = motorcycleRider.motorcycleShowroom(["125", "250", "600"], 100);
            assert.equal(actual, expected);
        });

        it('motorcycleShowroom works correctly', () => {
            let expected = `There are 2 available motorcycles matching your criteria!`;
            let actual = motorcycleRider.motorcycleShowroom(["125", "250", "600"], 500);
            assert.equal(actual, expected);
        });
        it('motorcycleShowroom works correctly', () => {
            let expected = `There are 3 available motorcycles matching your criteria!`;
            let actual = motorcycleRider.motorcycleShowroom(["125", "250", "600"], 600);
            assert.equal(actual, expected);
        });

    });
    describe('Tests for otherSpendings', () => {
        it('Invalid input', () => {
            assert.Throw(() => motorcycleRider.otherSpendings(6, [], true),  "Invalid Information!");
            assert.Throw(() => motorcycleRider.otherSpendings(["jacked", "helmet"], ["engine oil", "oil filter"], undefined),  "Invalid Information!");
            assert.Throw(() => motorcycleRider.otherSpendings([], [], 'test'),  "Invalid Information!");
            assert.Throw(() => motorcycleRider.otherSpendings([], 6, true),  "Invalid Information!");
        });

        it('when discount is true', () => {
            let expected = "You spend $540.00 for equipment and consumables with 10% discount!";
            let actual = motorcycleRider.otherSpendings(["jacked", "helmet"], ["engine oil", "oil filter"], true);
            assert.equal(actual, expected);
        });

        it('when discount is false', () => {
            let expected = "You spend $600.00 for equipment and consumables!";
            let actual = motorcycleRider.otherSpendings(["jacked", "helmet"], ["engine oil", "oil filter"], false);
            assert.equal(actual, expected);
        });
        
    });

});

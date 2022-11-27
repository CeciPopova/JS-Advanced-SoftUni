let bookSelection = require('./solve');
const { assert } = require('chai');

describe('Tests for bookSelection', () => {
    describe('Test isGenreSuitable', () => {
        it('wrong genre Thriller', () => {
            let expectedResult = `Books with Thriller genre are not suitable for kids at 12 age`;
            let result = bookSelection.isGenreSuitable('Thriller', 12);
            assert.equal(result, expectedResult);
        });
        it('wrong genre Horror', () => {
            let expectedResult = `Books with Horror genre are not suitable for kids at 11 age`;
            let result = bookSelection.isGenreSuitable('Horror', 11);
            assert.equal(result, expectedResult);
        });
        it('correct genre', () => {
            let expectedResult = `Those books are suitable`;
            let result = bookSelection.isGenreSuitable('Thriller', 13);
            assert.equal(result, expectedResult);
        });
    });

    describe('Test isItAffordable', () => {
        it('wrong price type', () => {
            assert.Throw(() => bookSelection.isItAffordable('pesho', 10), "Invalid input");
            assert.Throw(() => bookSelection.isItAffordable(null, 10), "Invalid input");
            assert.Throw(() => bookSelection.isItAffordable([], 10), "Invalid input");
            assert.Throw(() => bookSelection.isItAffordable({}, 10), "Invalid input");
            assert.Throw(() => bookSelection.isItAffordable(undefined, 10), "Invalid input");
        });

        it('wrong budget type', () => {
            assert.Throw(() => bookSelection.isItAffordable(10, 'pesho'), "Invalid input");
            assert.Throw(() => bookSelection.isItAffordable(10, null), "Invalid input");
            assert.Throw(() => bookSelection.isItAffordable(10, []), "Invalid input");
            assert.Throw(() => bookSelection.isItAffordable(10, {}), "Invalid input");
            assert.Throw(() => bookSelection.isItAffordable(10, undefined), "Invalid input");
        });

        it('Test when price is bigger then the budget', () => {
            let expected = "You don't have enough money"
            let realResult = bookSelection.isItAffordable(10, 5);
            assert.equal(realResult, expected);
        });

        it('Test when budget is bigger then the price', () => {
            let expected = `Book bought. You have 10$ left`;
            let realResult = bookSelection.isItAffordable(5, 15);
            assert.equal(realResult, expected);
        });
    });
    describe('Test suitableTitles ', () => {
        it('wrong books type', () => {
            assert.Throw(() => bookSelection.suitableTitles(3, 'Thriller'), "Invalid input");
            assert.Throw(() => bookSelection.suitableTitles(null, 'Thriller'), "Invalid input");
            assert.Throw(() => bookSelection.suitableTitles(undefined, 'Thriller'), "Invalid input");
            assert.Throw(() => bookSelection.suitableTitles({}, 'Thriller'), "Invalid input");
        });

        it('wrong wantedGenre type', () => {
            assert.Throw(() => bookSelection.suitableTitles(([{ title: "The Da Vinci Code", genre: "Thriller" }]), 3), "Invalid input");
            assert.Throw(() => bookSelection.suitableTitles(([{ title: "The Da Vinci Code", genre: "Thriller" }]), null), "Invalid input");
            assert.Throw(() => bookSelection.suitableTitles(([{ title: "The Da Vinci Code", genre: "Thriller" }]), undefined), "Invalid input");
            assert.Throw(() => bookSelection.suitableTitles(([{ title: "The Da Vinci Code", genre: "Thriller" }]), {}), "Invalid input");
        });

        it('Test if suitableTitles works corectly', () => {

            let array = [
                { title: "The Da Vinci Code", genre: "Thriller" },
                { title: "The mask", genre: "Thriller" },
                { title: "Rocky", genre: "Comedy" }
            ];
            let wantedGenre = 'Thriller';
            let expected = ['The Da Vinci Code', 'The mask'];
            let actual = bookSelection.suitableTitles(array, wantedGenre);
            assert.equal(actual.join(" "), expected.join(" "));

        });
    });
})

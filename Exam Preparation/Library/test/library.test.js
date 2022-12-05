const library = require('../library');
const { assert } = require('chai');

describe("Tests for library", function () {
    describe("Tests for calcPriceOfBook", function () {
        it("if the input is invalid", function () {
            assert.Throw(() => library.calcPriceOfBook(67, 'old'), "Invalid input");
            assert.Throw(() => library.calcPriceOfBook(67, 2000), "Invalid input");
            assert.Throw(() => library.calcPriceOfBook('book', 'old'), "Invalid input");
            assert.Throw(() => library.calcPriceOfBook([], 1980), "Invalid input");
            assert.Throw(() => library.calcPriceOfBook('book', undefined), "Invalid input");
        });

        it('calculate the price of the book depending of the year of publication', () => {
            let expected = `Price of Book is 20.00`;
            let actual = library.calcPriceOfBook('Book', 2000);
            assert.equal(actual, expected);
        });

        it('calculate the price of the book with discount', () => {
            let expected = `Price of Book is 10.00`;
            let actual = library.calcPriceOfBook('Book', 1977);
            assert.equal(actual, expected);
        });

        it('calculate the price of the book with discount', () => {
            let expected = `Price of Book is 10.00`;
            let actual = library.calcPriceOfBook('Book', 1980);
            assert.equal(actual, expected);
        });
    });
    describe('Tests for findBook', () => {
        it('If there is no books in library', () => {
            assert.Throw(() => library.findBook([], 'Book'), "No books currently available");
        });

        it('if the searching book is in the library', () => {
            let expected = "We found the book you want.";
            let actual = library.findBook(["Troy", "Life Style", "Torronto", "Book"], "Book");
            assert.equal(actual, expected);
        });

        it('if the searching book is not in the library', () => {
            let expected = "The book you are looking for is not here!";
            let actual = library.findBook(["Troy", "Life Style", "Torronto", "Book"], "Hello");
            assert.equal(actual, expected);
        });
    });
    describe('Tests for arrangeTheBooks', () => {
        it('if the input is not valid', () => {
            assert.Throw(() => library.arrangeTheBooks('book'), "Invalid input");
            assert.Throw(() => library.arrangeTheBooks(-4), "Invalid input");
            assert.Throw(() => library.arrangeTheBooks(null), "Invalid input");
            assert.Throw(() => library.arrangeTheBooks([]), "Invalid input");
        });

        it('If available space is bigger then the count of the books', () => {
            let expected = "Great job, the books are arranged.";
            let actual = library.arrangeTheBooks(10);
            assert.equal(actual, expected);
        });

        it('If available space is bigger then the count of the books', () => {
            let expected = "Great job, the books are arranged.";
            let actual = library.arrangeTheBooks(40);
            assert.equal(actual, expected);
        });

        it('If available space is smaller then the count of the books', () => {
            let expected = "Insufficient space, more shelves need to be purchased.";
            let actual = library.arrangeTheBooks(70);
            assert.equal(actual, expected);
        });

    });
});

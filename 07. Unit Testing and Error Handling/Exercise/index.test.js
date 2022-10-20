const { assert } = require('chai');
const sumOfTwoNumbers = require('./index');

describe('sumOfTwoNumbers function test', () => {
    it('test', () => {
        assert.equal(sumOfTwoNumbers(3, 4), 7);

    });
});
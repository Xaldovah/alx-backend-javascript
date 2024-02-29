const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return the correct sum when both numbers are integers', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return the correct sum when one number is a float', function() {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should return the correct sum when both numbers are floats', function() {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should return the correct sum when both numbers are floats and rounding up', function() {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});

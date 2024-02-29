const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
    describe('SUM operation', function() {
        it('should return the correct sum when both numbers are integers', function() {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    describe('SUBTRACT operation', function() {
        it('should return the correct difference when subtracting two numbers', function() {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    describe('DIVIDE operation', function() {
        it('should return the correct quotient when dividing two numbers', function() {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" when dividing by 0', function() {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });

    it('should throw an error for an invalid operation type', function() {
        expect(() => {
            calculateNumber('INVALID_OPERATION', 1.4, 4.5);
        }).to.throw(Error);
    });
});

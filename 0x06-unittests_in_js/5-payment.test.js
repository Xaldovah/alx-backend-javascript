const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
    let consoleSpy;

    beforeEach(function() {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function() {
        consoleSpy.restore();
    });

    it('should log "The total is: 120" when totalAmount is 100 and totalShipping is 20', function() {
        Utils.sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
    });

    it('should log "The total is: 20" when totalAmount is 10 and totalShipping is 10', function() {
        Utils.sendPaymentRequestToApi(10, 10);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
    });
});

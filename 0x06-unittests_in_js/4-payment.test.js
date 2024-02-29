const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
    let stub;
    let consoleSpy;

    beforeEach(function() {
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function() {
        stub.restore();
        consoleSpy.restore();
    });

    it('should call Utils.calculateNumber with type = SUM, a = 100, and b = 20', function() {
        Utils.sendPaymentRequestToApi(100, 20);
        expect(stub.calledOnce).to.be.true;
        expect(stub.calledWithExactly('SUM', 100, 20)).to.be.true;
    });

    it('should log "The total is: 10"', function() {
        Utils.sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWithExactly('The total is: 10')).to.be.true;
    });
});

const { expect } = require('chai');
const sinon = require('sinon');
const { plusMinus } = require('../../src/hackyFranks');

describe('Plus Minus', function() {
  const sandbox = sinon.createSandbox();

  beforeEach(function () {
    sandbox.spy(console, 'log');
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('handles empty array', function() {
    const counts = plusMinus([]);
    const [call1, call2, call3] = console.log.getCalls();

    expect(console.log.called).to.equal(true, 'no console output');
    expect(console.log.callCount).to.equal(3, 'console.log was not called 3 times');
    expect(call1.firstArg).to.equal('0.000000', 'incorrect output value for the positive ratio');
    expect(call2.firstArg).to.equal('0.000000', 'incorrect output value for the negative ratio');
    expect(call3.firstArg).to.equal('0.000000', 'incorrect output value for the zero ratio');
  });

  it('handles 1 positive number', function() {
    const counts = plusMinus([1]);
    const [call1, call2, call3] = console.log.getCalls();

    expect(console.log.called).to.equal(true, 'no console output');
    expect(console.log.callCount).to.equal(3, 'console.log was not called 3 times');
    expect(call1.firstArg).to.equal('1.000000', 'incorrect output value for the positive ratio');
    expect(call2.firstArg).to.equal('0.000000', 'incorrect output value for the negative ratio');
    expect(call3.firstArg).to.equal('0.000000', 'incorrect output value for the zero ratio');
  });

  it('handles 1 negative number', function() {
    const counts = plusMinus([-1]);
    const [call1, call2, call3] = console.log.getCalls();

    expect(console.log.called).to.equal(true, 'no console output');
    expect(console.log.callCount).to.equal(3, 'console.log was not called 3 times');
    expect(call1.firstArg).to.equal('0.000000', 'incorrect output value for the positive ratio');
    expect(call2.firstArg).to.equal('1.000000', 'incorrect output value for the negative ratio');
    expect(call3.firstArg).to.equal('0.000000', 'incorrect output value for the zero ratio');
  });

  it('handles 1 zero number', function() {
    const counts = plusMinus([0]);
    const [call1, call2, call3] = console.log.getCalls();

    expect(console.log.called).to.equal(true, 'no console output');
    expect(console.log.callCount).to.equal(3, 'console.log was not called 3 times');
    expect(call1.firstArg).to.equal('0.000000', 'incorrect output value for the positive ratio');
    expect(call2.firstArg).to.equal('0.000000', 'incorrect output value for the negative ratio');
    expect(call3.firstArg).to.equal('1.000000', 'incorrect output value for the zero ratio');
  });

  it('handles a hard coded array', function() {
    const counts = plusMinus([1, 0, -1, -1, 1]);
    const [call1, call2, call3] = console.log.getCalls();

    expect(console.log.called).to.equal(true, 'no console output');
    expect(console.log.callCount).to.equal(3, 'console.log was not called 3 times');
    expect(call1.firstArg).to.equal('0.400000', 'incorrect output value for the positive ratio');
    expect(call2.firstArg).to.equal('0.400000', 'incorrect output value for the negative ratio');
    expect(call3.firstArg).to.equal('0.200000', 'incorrect output value for the zero ratio');
  });

  it('handles a different hard coded array', function() {
    const counts = plusMinus([-4, 3, -9, 0, 4, 1]);
    const [call1, call2, call3] = console.log.getCalls();

    expect(console.log.called).to.equal(true, 'no console output');
    expect(console.log.callCount).to.equal(3, 'console.log was not called 3 times');
    expect(call1.firstArg).to.equal('0.500000', 'incorrect output value for the positive ratio');
    expect(call2.firstArg).to.equal('0.333333', 'incorrect output value for the negative ratio');
    expect(call3.firstArg).to.equal('0.166667', 'incorrect output value for the zero ratio');
  });
});
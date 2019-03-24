var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('it should add numbers', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(calculator.runningTotal, 5)
  });

  it('it should subtract numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  });

  it('it should multiply numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15)
  });

  it('it should divide numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
  });

  it('it can concatenate multiple number button clicks', function(){
    calculator.runningTotal = calculator.newTotal;
    calculator.numberClick(1);
    assert.equal(calculator.newTotal, false)
  });

  it('it can chain multiple operations together', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    calculator.operatorClick('+');
    assert.equal(calculator.newTotal, true)
  });

  it('it can clear the running total without affecting the calculation', function(){
    calculator.previousTotal = 4;
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0)
  });

});

import {expect} from 'chai';
import {NumbersValidator} from '../../app/numbers_validator.js';

describe('is all numbers', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  it('should return array of numbers', () => {
    const arrayOfNumbers = [5, 6, 7, 8, 9];
    const checkedArrayOfNumbers = validator.isAllNumbers(arrayOfNumbers);
    expect(checkedArrayOfNumbers).to.be.true;
  });

  it('should throw an error if not array provided', () => {
    const arrayOfNumbers = {key: 'value'};
    expect(() => {
      validator.isAllNumbers(arrayOfNumbers);
    }).to.throw('[object Object]] is not an array');
  });
});

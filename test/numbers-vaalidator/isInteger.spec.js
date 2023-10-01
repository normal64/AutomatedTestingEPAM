import {expect} from 'chai';
import {NumbersValidator} from '../../app/numbers_validator.js';

describe('is integer?', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  it('should return true if value is a number', () => {
    const maybeNumber = 4;
    const isInteger = validator.isInteger(maybeNumber);
    expect(isInteger).to.be.true;
  });

  it('should throw an error not a number is provided', () => {
    const maybeNumber = 'Epam';

    expect(() => {
      validator.isInteger(maybeNumber);
    }).to.throw('[Epam] is not a number');
  });
});

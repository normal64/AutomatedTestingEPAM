import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';
describe('is number even positive tests', () =>{
  let validator;
  beforeEach(()=>{
    validator = new NumbersValidator();
  });
  afterEach( ()=>{
    validator = null;
  });
  it('should return true in case of an even number', ()=>{
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });
  it('should return false in case of an even number', ()=>{
    const validationResults = validator.isNumberEven(7);
    expect(validationResults).to.be.equal(false);
  });
  it('should throw an error when string provided', () =>{
    expect(()=>{
      validator.isNumberEven('text');
    }).to.throw('[text] is not of type "Number" it is of type "string"');
  });
});

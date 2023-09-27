import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';
describe('is array of numbers', () =>{
  let validator;
  beforeEach(()=>{
    validator = new NumbersValidator();
  });
  afterEach( ()=>{
    validator = null;
  });
  it('should return array of even numbers', ()=>{
    const arrayOfNumbers = [5, 6, 7, 8, 9];
    const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql([6, 8]);
  });
  it('should throw an arrow is array contains not a Number type', ()=>{
    const arrayOfNumbers = [5, 6, '7', 8, 9];
    expect(()=>{validator.getEvenNumbersFromArray(arrayOfNumbers)}).to.throw('[5,6,7,8,9] is not an array of "Numbers"');
  });
});

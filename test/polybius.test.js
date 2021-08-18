// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe('polybius', () => {
  it('should have spaces and letters included.', () => {
    const inputA =  'thinkful';
    const expected = '4432423352125413';
    const actual = polybius(inputA);
    expect(actual).to.equal(expected);
  })
  it('should still be a string, when encodeing', () => {
    const inputA = 'thinkful';
    const expected = '4432423352125413';
    const actual = polybius(inputA);
    expect(actual).to.equal(expected);
  })
  it('should have even number of characters in the string excluding spaces, when decodeing. otherwise, return false.', () => {
    const inputA = '3251131343 2543241341';
    const inputB = false;
    const expected = 'hello world';
    const actual = polybius(inputA, inputB);
    expect(actual).to.equal(expected);
  })
  it('should maintain spaces throughout', () => {
    const inputA ='Hello world';
    const expected = '3251131343 2543241341';
    const actual = polybius(inputA);
    expect(actual).to.equal(expected);
  })
 it('the letters "i" and "j" should share a space. when encoded, both letters can be converted to 42, but when decoding, both letters should somehow be shown.', () => {
    const inputA = 'thinkful';
    const expected = '4432423352125413';
    const actual = polybius(inputA);
    expect(actual).to.equal(expected);
 })
     
    })



module.exports = { polybius };
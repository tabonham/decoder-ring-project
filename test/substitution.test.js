// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
         it("should include special characters", () => {
  const inputA = 'message';
  const inputB = '$wae&zrdxtfcygvuhbijnokmpl';
  const expected = 'y&ii$r&';
  const actual = substitution(inputA, inputB);
    expect(actual).to.equal(expected);
  })
  it("should have spaces maintained throughout", () => {
    const inputA = 'You are an excellent spy';
    const inputB = 'xoyqmcgrukswaflnthdjpzibev';
    const expected = 'elp xhm xf mbymwwmfj dne';
    const actual = substitution(inputA, inputB);
    expect(actual).to.equal(expected);
  })
  it("captial letters should be ignored", () => {
     const inputA = 'You are excellent';
     const inputB = 'xoyqmcgrukswaflnthdjpzibev';
     const expected = 'elp xhm mbymwwmfj';
     const actual = substitution(inputA, inputB);
     expect(actual).to.equal(expected);
  })
  it("alphabet parameter must be a string of exactly 26 characters, which could include special characters. Otherwise, it should return false.", () => {
     const inputA = 'time';
     const inputB = 'short';                          
     const expected = false;                     
     const actual = substitution(inputA, inputB);
     expect(actual).to.equal(expected);                                })
   it("should returns false if there are any duplicate characters in the given alphabet.", () => {
     const inputA = 'letters';
     const inputB = 'qazwsxedcrfvtgbyhnbhujkloi';
     const expected = false;
     const actual = substitution(inputA, inputB);
     expect(actual).to.equal(expected);
   })
})
         






module.exports = { substitution };
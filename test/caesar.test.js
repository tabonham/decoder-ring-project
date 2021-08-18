// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should encode an inputted string by shifting each character by the number given", () => {
    const inputA = "thinkful";
    const inputB = 3;
    const expected = "wklqnixo";
    const actual = caesar(inputA, inputB);
    expect(actual).to.equal(expected);
  })
  it("should ignore capital letters", () => {
    const inputA = "BPQA qa I amkzmb umaaiom!";
    const inputB = 8;
    const inputC = false;
    const expected = "this is a secret message!";
    const actual = caesar(inputA, inputB, inputC);
    expect(actual).to.equal(expected);
  })
  it("should maintain spaces and other nonalphabetic sysmbols in the message", () => {
    const inputA = "This is a secret message!";
    const inputB = 8;
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar(inputA, inputB);
    expect(actual).to.equal(expected);
  })
  it("should if a letter is shifted so that it goes off the alphabet ", () => {
    const inputA = "thinkful";
    const inputB = 99;
    const expected = false;
    const actual = caesar(inputA, inputB);
    expect(actual).to.equal(expected);
  })
})

module.exports = { caesar };
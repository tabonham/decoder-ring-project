const polybiusModule = (function () {
    // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    input = input.toLowerCase();
    const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i/j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
    const cipherArr = [11, 21, 31, 41, 51, 12, 22, 32, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34, 44, 54, 15, 25, 35, 45, 55, 65];
    let message = [];
    if (encode) {
      for (let letter of input) {
        if (letter === " "){
          message.push(letter);
        } else {
            let index = 0
            if (letter === "i" || letter === "j") {
              index = 8;
            } else {
              index = alpha.indexOf(letter);
            }
          message.push(cipherArr[index]);
        }
      }
      return message.join("")
    } else {
      let newInput = input.replace(" ", 65);
      if (newInput.length % 2 !== 0) {
        return false;
      }
      let inputArray = newInput.match(/..?/g);
      let newIndex = 0
      for (let pair of inputArray) {
        newIndex = cipherArr.indexOf(Number(pair));
        message.push(alpha[newIndex]);
      }
      return message.join("")
    }
   }
    return {
      polybius,
    };
  })();
   
  module.exports = { polybius: polybiusModule.polybius };
  
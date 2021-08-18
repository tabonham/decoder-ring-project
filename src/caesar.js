const caesarModule = (function () {
    // you can add any code you want within this function scope
  
   function caesar(input, shift, encode = true) {
      const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      const newInput = input.toLowerCase().split("");
      const result = [];
      if (!shift || shift < -25 || shift > 25) {
        return false;
      } 
    if (encode) {
      newInput.forEach((character, index) => {
        if (alphabet.includes(character)) {
          alphabet.find((letter, index) => {
            if (character === letter) {
              let shiftedInd = index + shift;
              if (shiftedInd >= 26) {
                shiftedInd = shiftedInd - 26;
              } else if (shiftedInd < 0) {
                shiftedInd = shiftedInd + 26;
              }
              const shiftedChar = alphabet[shiftedInd];
              result.push(shiftedChar);
            }
          })
        } else {
          result.push(character);
        }
      })
    } 
      else {
      newInput.forEach((character) => {
        if (alphabet.includes(character)) {
          alphabet.find((letter, index) => {
            if (character === letter) {
              let shiftedInd = index - shift;
              if (shiftedInd >= 26) {
                shiftedInd = shiftedInd - 26;
              } else if (shiftedInd < 0) {
                shiftedInd = shiftedInd + 26;
              }
              const shiftedChar = alphabet[shiftedInd];
              result.push(shiftedChar);
            }
          })
        } else {
          result.push(character);
        }
      })
    }
      return result.join("");
  }
    return {
      caesar,
    };
  })();
  
  
  module.exports = { caesar: caesarModule.caesar };
  
const substitutionModule = (function () {
    // you can add any code you want within this function scope
  //no repeating characters
    //
    function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false;
      const userAlphabet = alphabet.toLowerCase().split('');//no capitals
      for (let char of userAlphabet) {
          if (userAlphabet.indexOf(char) !== userAlphabet.lastIndexOf(char) || userAlphabet.length !== 26) 
          return false;//26 characters
      }
      const realAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      const changedInput = input.toLowerCase().split('');//no capitals
      let emptyArr = [];
      if (encode) {
          for (let char of changedInput) {
              const isVaildChar = realAlphabet.includes(char);
              if (!isVaildChar) emptyArr.push(char);
              const index = realAlphabet.indexOf(char);
              emptyArr.push(userAlphabet[index]);
          }
      }else if (!encode ) {
          for (let char of changedInput) {
              const isValidChar = userAlphabet.includes(char);
              if (!isValidChar) emptyArr.push(char);
              const index = userAlphabet.indexOf(char);
              emptyArr.push(realAlphabet[index]);
          }
      }
      return emptyArr.join('');
    }
  
    return {
      substitution,
    };
  })();
  
  module.exports = { substitution: substitutionModule.substitution };
  
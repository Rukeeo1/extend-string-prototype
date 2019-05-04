//converts strings to uppercase using unicode characters
function toUpperCasing(str) {
    let newStr = "";
    for (var i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if (code >= 97 && code <= 122) {
        code -= 32;
      }
      newStr += String.fromCharCode(code);
    }
    //console.log(newStr);
    return newStr;
  }


  module.exports = {
      toUpperCasing
  }
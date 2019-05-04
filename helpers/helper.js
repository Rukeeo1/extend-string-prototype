//converts strings to uppercase using unicode characters...used by toUpper method.
function toUpperCasing(str) {
  let newStr = "";
  for (var i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      code -= 32;
    }
    newStr += String.fromCharCode(code);
  }
  return newStr;
}

/**The toLower method uses this function to convert a string to lowercase */
function strToLowerCase(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i); //converts each characters to unicode equivalent
    /*check if character is uppercase*/
    if (code >= 65 && code <= 90) {
      code += 32;
    }
    newStr += String.fromCharCode(code);
  }
  return newStr;
}

module.exports = {
  toUpperCasing,
  strToLowerCase
};

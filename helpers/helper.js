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

module.exports = {
  toUpperCasing
};

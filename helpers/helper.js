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

//invertCasing function used by invertCase method on string prototytpe
function invertCasing(str) {
  let newStr = "";
  let regex = /[A-Z]/;

  for (var i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      newStr += str[i].toLower();
    } else {
      newStr += str[i].toUpper();
    }
  }
  return newStr;
}

//alternateCasing helps the alternate case method...
function alternateCasing(str) {
  let newStr = "";
  let strToLowerCase = str.toLower();
  for (var i = 0; i < strToLowerCase.length; i++) {
    if (i % 2 !== 0) {
      newStr += strToLowerCase[i].toUpper();
    } else {
      newStr += strToLowerCase[i];
    }
  }
  return newStr;
}

/**The following handles the number to words functions --- which has different implementations */

let wordsArray = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine"
];

function convertNumbersToWords(number) {
  let numberToString = String(number);
  let newString = "";
  let regex = /\s/;

  for (var i = 0; i < numberToString.length; i++) {
    //convert the numberTostring member at that index to a number
    newString += " " + wordsArray[numberToString[i]];
  }

  return newString.replace(regex, "");
}

module.exports = {
  toUpperCasing,
  strToLowerCase,
  invertCasing,
  alternateCasing,
  convertNumbersToWords
};

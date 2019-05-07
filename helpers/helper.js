//converts strings to uppercase using unicode characters...used by toUpper method.
function toUpperCasing(str) {
  let newStr = "";
  for (var i = 0; i < str.length; i++) {
    /* At each index, convert the character there to it's unicode equivalent */
    let code = str.charCodeAt(i);
    /*characters between 97 and 122 are lowerCase. subtract 32 from them
    to convert to UpperCase.
    */
    if (code >= 97 && code <= 122) {
      code -= 32;
    }
    /* convert charcters from their charcode back to normal letters */
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
    /* test to see if a given character is upperCase...then convert to lowerCase */
    if (regex.test(str[i])) {
      newStr += str[i].toLower();
    } else {
      /*if a character isn't upperCase then it's lower case. Convert to upperCase */
      newStr += str[i].toUpper();
    }
  }
  return newStr;
}

//alternateCasing helps the alternate case method...
function alternateCasing(str) {
  let newStr = "";
  /* first convert the entire string to lower case */
  let strToLowerCase = str.toLower();
  for (var i = 0; i < strToLowerCase.length; i++) {
    /* convert the characters on odd indexes to upperCase. */
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
  /* converts the passed in number to string. */
  let numberToString = String(number);
  let newString = "";
  let regex = /\s/;

  for (var i = 0; i < numberToString.length; i++) {
    //pass in each digit into the word array to return the corresponding word format.
    newString += " " + wordsArray[numberToString[i]];
  }

  return newString.replace(regex, "");
}

function strNumToWord(str) {
  let newString = "";
  let regex = /\s/;

  for (var i = 0; i < str.length; i++) {
    //pass in the the number index into the array to return the corresponding word format.
    newString += " " + wordsArray[str[i]];
  }
  return newString.replace(regex, "");
}

module.exports = {
  toUpperCasing,
  strToLowerCase,
  invertCasing,
  alternateCasing,
  convertNumbersToWords,
  strNumToWord
};

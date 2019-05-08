const {
  toUpperCasing,
  strToLowerCase,
  invertCasing,
  alternateCasing,
  convertNumbersToWords,
  strNumToWord
} = require("./helpers/helper");

String.prototype.hasVowels = function() {
  let regex = /[aeiou]/gi;
  return regex.test(this);
};

String.prototype.toUpper = function() {
  /**check helper.js for implementation details */
  return toUpperCasing(this);
};

String.prototype.toLower = function() {
  return strToLowerCase(this);
};

String.prototype.ucFirst = function() {
  return this.charAt(0).toUpper() + this.substring(1);
};

String.prototype.isQuestion = function() {
  let regex = /[\w]+\?$/;
  return regex.test(this);
};

String.prototype.words = function() {
  let regex = /[a-zA-Z]+/g;
  return this.match(regex);
};

String.prototype.wordCount = function() {
  return this.words().length;
};

//toCurrency ....... implementation comming soon.
String.prototype.fromCurrency = function() {
  let regex = /,/g; //store the comma ',' pattern in a regexp

  let currencyWithoutCommas = this.replace(regex, "");

  //converts from string to Number;
  return Number(currencyWithoutCommas);
};

String.prototype.inverseCase = function() {
  /**check helper.js for implementation details */
  return invertCasing(this);
};

String.prototype.alternatingCase = function() {
  /**check helper.js for implementation details */
  return alternateCasing(this);
};

String.prototype.numberWords = function(number) {
  return convertNumbersToWords(number);
};

/**I wasn't sure of the exact way in which The instructor wanted the function to be implemented, so i added another implementation.*/
String.prototype.stringNumbersToWords = function() {
  return strNumToWord(this);
};

//isDigit (typeof Boolean)
String.prototype.isDigit = function() {
  let regex = /^\d$/g;
  //   console.log(this.match(regex));
  return regex.test(this);
};

String.prototype.toCurrency = function(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};


String.prototype.ucFirstAgain = function(){
  //convert string to array with the split method.
  let stringToArray = this.split(' ');
/* loop through string with the 'map' method
*call the ucFirst method on each item. This converts the first letter of Each word to uppperCase
* The 'map' method returns an array... use the 'join' method to convert it back to string.
*/
  return stringToArray.map((item) => item.ucFirst()).join(' ');
}

console.log('rukee ojigbo'.ucFirstAgain());
module.exports = String.prototype;

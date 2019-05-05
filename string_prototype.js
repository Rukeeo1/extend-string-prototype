const { toUpperCasing, strToLowerCase } = require("./helpers/helper");

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
  return this.charAt(0).toUpperCase() + this.substring(1);
};

String.prototype.isQuestion = function() {
  let regex = /[\w]+\?$/;
  return regex.test(this);
};

String.prototype.words = function() {
  let regex = /[a-zA-Z]+/g;
  return this.match(regex);
};

// String.prototype.wordCount = function() {
//   return this.words().length;
// };
module.exports = String.prototype;

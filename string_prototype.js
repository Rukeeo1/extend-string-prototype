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

module.exports = String.prototype;

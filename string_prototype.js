const {toUpperCasing} = require('./helpers/helper')
String.prototype.hasVowels = function() {
  let regex = /[aeiou]/gi;
  return regex.test(this);
};

String.prototype.toUpper = function() {
 /**check helper.js for implementation details */
  return toUpperCasing(this)
};


module.exports = String.prototype;

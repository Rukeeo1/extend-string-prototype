String.prototype.hasVowels = function() {
    let regex = /[aeiou]/gi;
    return regex.test(this);
  };

module.exports = String.prototype;


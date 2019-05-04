const String = require("../string_prototype");
console.log(String);

describe("hasVowels", function() {
  it("should return true if the string contains a vowel", function() {
    expect("hello".hasVowels()).toBe(true);
  });

  it('should return false, if the string contains no vowels', function(){
      expect('lynch'.hasVowels()).toBe(false);
  });

  it('should return a boolean', function(){
      expect(typeof 'Some String'.hasVowels()).toBe('boolean')
  })
});

const String = require("../string_prototype");
console.log(String);

describe("hasVowels", function() {
  it("should return true if the string contains a vowel", function() {
    expect("hello".hasVowels()).toBe(true);
  });

  it("should return false, if the string contains no vowels", function() {
    expect("lynch".hasVowels()).toBe(false);
  });

  it("should return boolean as type", function() {
    expect(typeof "Some String".hasVowels()).toBe("boolean");
  });
});

describe("toUpper", function() {
  it("should return the string converted to upper case", function() {
    expect("this string should be returned as uppercase".toUpper()).toBe(
      "THIS STRING SHOULD BE RETURNED AS UPPERCASE"
    );
  });

  it("should return 'string' as type ", function() {
    expect(typeof "hello world".toUpper()).toBe("string");
  });
});

describe("toLower", function() {
  it("should return the string converted to lower case", function() {
    expect(
      "HELLO, CAN YOU HELP ME CONVERT THIS GUY TO LOWER CASE".toLower()
    ).toBe("hello, can you help me convert this guy to lower case");
  });

  it("should return 'string' as type ", function() {
    expect(typeof "hello world".toLower()).toBe("string");
  });
});

describe("ucFirst", function() {
  it("should convert the first letter of the string to uppercase", function() {
    expect("rukee".ucFirst()).toBe("Rukee");
  });

  it("should return 'string' as type ", function() {
    expect(typeof "hello world".ucFirst()).toBe("string");
  });
});

//isQuestion
describe("isQuestion", function() {
  it("should return true if the string ends with a question", function() {
    expect("Would you be going out today?".isQuestion()).toBe(true);
  });

  it("should return false if the string doesn't ends with a question", function() {
    expect("this is a string without a question".isQuestion()).toBe(false);
  });

  it("should return 'boolean' as type ", function() {
    expect(typeof "hello world?".isQuestion()).toBe("boolean");
  });
});

//words:
describe("words", function() {
  it("should return the list of words in the string", function() {
    expect("Would you be going out today?".words()).toEqual([
      "Would",
      "you",
      "be",
      "going",
      "out",
      "today"
    ]);
  });

  it("should return 'object' as type ", function() {
    expect(typeof "hello world?".words()).toBe("object");
  });
});

//wordCount
describe("wordCount", function() {
  it("should return the number of words in string", function() {
    expect("Would you be going out today?".wordCount()).toEqual(6);
  });

  it("should return 'number' as type ", function() {
    expect(typeof "hello world?".wordCount()).toBe("number");
  });
});

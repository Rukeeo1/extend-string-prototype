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

//toCurrency
describe("toCurrency", function() {
  it("should return the number formatted as a currency", function() {
    expect(String.toCurrency(11111.11)).toEqual();
  });

  it("should return the number formatted as a currency", function() {
    expect(String.toCurrency(1000)).toEqual();
  });

  it("should return 'number' as type ", function() {
    expect(typeof String.toCurrency(11111.11)).toBe("string");
  });
});
//************** */
//fromCurrency
describe("fromCurrency", function() {
  it("should return a number from the currency without the comma", function() {
    expect("11,111.11".fromCurrency()).toEqual(11111.11);
  });

  it("should return 'number' as type ", function() {
    console.log("hello world?.".fromCurrency());
    expect(typeof "hello world?".fromCurrency()).toBe("number");
  });
});

//inverseCase
describe("inverseCase", function() {
  it("should return the string with the case of each character inverted", function() {
    expect("Mr. Ben".inverseCase()).toEqual("mR. bEN");
  });

  it("should return the string with the case of each character inverted", function() {
    expect("rukee IS SOUL smashingly HANDsome!!!!".inverseCase()).toBe(
      "RUKEE is soul SMASHINGLY handSOME!!!!"
    );
  });

  it("should return 'string' as type ", function() {
    expect(typeof "some name".inverseCase()).toBe("string");
  });
});

//alternatingCase
describe("alternatingCase", function() {
  it("should alternate the casing of the string", function() {
    expect("Mr. Ben".alternatingCase()).toEqual("mR. bEn");
  });

  it("should alternate the casing of the string", function() {
    expect("rukee IS SOUL smashingly HANDsome!!!!".alternatingCase()).toBe(
      "rUkEe iS SoUl sMaShInGlY HaNdSoMe!!!!"
    );
  });

  it("should return 'string' as type ", function() {
    expect(typeof "some name".alternatingCase()).toBe("string");
  });
});

//numberWords (typeof String):
describe("numberWords", function() {
  it("should return the given number in words", function() {
    expect(String.numberWords(3244)).toEqual("Three Two Four Four");
  });

  it("should return the given number in words", function() {
    expect(String.numberWords(325)).toBe("Three Two Five");
  });

  it("should return 'string' as type ", function() {
    expect(typeof String.numberWords(7998)).toBe("string");
  });
});

//stringNumbersToWords
describe("stringNumbersToWords ", function() {
  it("should return the given number in words", function() {
    expect("3244".stringNumbersToWords()).toEqual("Three Two Four Four");
  });

  it("should return the given number in words", function() {
    expect("325".stringNumbersToWords()).toBe("Three Two Five");
  });

  it("should return 'string' as type ", function() {
    expect(typeof "325".stringNumbersToWords()).toBe("string");
  });
});

//isDigit (typeof Boolean)
describe("isDigit", function() {
  it("should return true if the number is a single digit", function() {
    expect("3".isDigit()).toEqual(true);
  });

  it("should return false if the given number is more than one digit", function() {
    expect("325".isDigit()).toBe(false);
  });

  it("should return 'string' as type ", function() {
    expect("should return false if words are passed in".isDigit()).toBe(false);
  });

  it("should return 'boolean' as it's type", function() {
    expect(typeof "3".isDigit()).toBe("boolean");
  });
});

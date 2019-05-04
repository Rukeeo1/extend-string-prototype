const String = require('../string_prototype');

describe('hasVowels', function(){
    it('should return true if the string contains a vowel', function(){
        expect('hello'.hasVowels).toBe(true);
    })
})
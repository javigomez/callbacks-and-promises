var fizzBuzz = require('./fizzbuzz.js').fizzBuzz
var fizzBuzzCallback = require('./fizzbuzz.js').fizzBuzzCallback
var fizzBuzzPromise = require('./fizzbuzz.js').fizzBuzzPromise

describe('when I call FizzBuzz with a number', () => {
    it('returns a value accordinly', () => {
        expect(fizzBuzz(1)).toBe(1)
        expect(fizzBuzz(2)).toBe(2)        
        expect(fizzBuzz(3)).toBe('Fizz')
        expect(fizzBuzz(5)).toBe('Buzz')        
        expect(fizzBuzz(15)).toBe('FizzBuzz')        
    })
})

describe('when I call callbackFizzBuzz with a number', () => {
    it('returns a value accordinly', done => {
        function myAssertionCallback(result) {
            expect(result).toBe('FizzBuzz')
            done()
        }
        fizzBuzzCallback(15, myAssertionCallback)
    })
})

describe('when I call promiseFizzBuzz with a number', () => {
    it('returns a value accordinly', () => {
        return fizzBuzzPromise(15).then(result => {
            expect(result).toBe('FizzBuzz')
          });
    })
})
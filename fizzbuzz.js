function fizzBuzz(number) {
    result = ''
    
    if (number % 3 === 0) {
        result += 'Fizz'
    }

    if (number % 5 === 0) {
        result += 'Buzz'
    }

    if (!result) return number
    return result
    
}

function fizzBuzzCallback(number, callback) {
    setTimeout(function() {
        const result = fizzBuzz(number)
        callback(result)
    }, 3000)     
}

function fizzBuzzPromise(number) {
    return new Promise((resolve) => {
        setTimeout(
            resolve,
            3000,
            fizzBuzz(number)
        )
    })  
}

module.exports = { fizzBuzz, fizzBuzzCallback, fizzBuzzPromise }
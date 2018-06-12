function mycallback(name) {
    console.log('hello', name)
}

mycallback('javi')

function ping(name, callback) {
    console.log('calling my callback')
    callback(name)
}

ping('javi', mycallback)
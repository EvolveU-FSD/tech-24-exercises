function countLetter(stringValue, letter) {
    var count = 0
    for (var i = 0; i < stringValue.length; i++) {
        if (stringValue.charAt(i) === letter) {
            count++
        }
    }
    return count
}

function testCountLetter(message, stringValue, letter, expectedValue) {
    let actualValue = countLetter(stringValue, letter)
    if (actualValue === expectedValue) {
        console.log('SUCCESS: ' + message)
    }
    else {
        console.log('FAILED: ' + message, 'expected count of "' + letter +'" in "' + stringValue + '" to be', expectedValue, 'but received', actualValue)
    }
}

testCountLetter('Empty string', '', 'a', 0)
testCountLetter('Single occurence', 'hello', 'e', 1)
testCountLetter('Multiple occurence', 'hello', 'l', 2)
testCountLetter('Not found', 'hello', 'z', 0)
testCountLetter('Longer sentence', 'Hello, this is a fine string to test', 'i', 4)

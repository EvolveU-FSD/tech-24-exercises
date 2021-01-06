
function maxValue(valueArray) {
    if (valueArray.length > 0) {
        return Math.max(...valueArray)
    } 
    else {
        return undefined
    }
}

function testMaxValue(message, valueArray, expectedValue) {
    let actualValue = maxValue(valueArray)
    if (actualValue === expectedValue) {
        console.log('SUCCESS: ' + message)
    }
    else {
        console.log('FAILED: ' + message, 'expected max value of ', valueArray, 'to be', expectedValue, 'but received', actualValue)
    }
}

testMaxValue('empty case', [], undefined)
testMaxValue('one element', [13], 13)
testMaxValue('at the start of the array', [12,10,2], 12)
testMaxValue('in the middle of the array', [10,45,2], 45)
testMaxValue('at the end of the array', [1,2,3,7], 7)
testMaxValue('repeated max', [1,2,7,7,7,2,6], 7)
testMaxValue('negative values', [-12,-10,-2,-45], -2)
// testMaxValue('bad input', [23,"hi",14,12], ???)
// testMaxValue('sort of bad input', [23,"45",14,12], ???)



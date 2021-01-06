
function nthSmallest(arr, pos) { 
    let uniqueValuesSet = new Set(arr)
    let uniqueValuesArray = Array.from(uniqueValuesSet)
    uniqueValuesArray.sort(function(a,b){return a-b}); 
    return uniqueValuesArray[pos-1] 
} 
function testNthSmallest(message, valueArray, n, expectedValue) {
    let actualValue = nthSmallest(valueArray, n)
    if (actualValue === expectedValue) {
        console.log('SUCCESS: ' + message)
    }
    else {
        console.log('FAILED: ' + message, 'expected max value of ', valueArray, 'to be', expectedValue, 'but received', actualValue)
    }
}

testNthSmallest('selects smallest element', [12,10,2], 1, 2)
testNthSmallest('selects second smallest element', [12,10,2], 2, 10)
testNthSmallest('selects third smallest element', [12,10,2], 3, 12)
testNthSmallest('larger array, random order', [45, 13, 25, 12, 10, 27], 3, 13)
testNthSmallest('repeated value below the nth smallest', [45, 10, 25, 12, 10, 10], 2, 12)
testNthSmallest('repeated value at the nth smallest', [45, 12, 25, 12, 12, 10], 2, 12)
testNthSmallest('repeated value above the nth smallest', [45, 25, 25, 12, 25, 10], 2, 12)
testNthSmallest('Danielles test', [47 ,-13 ,99 ,960 ,-1 ,1467 ,-2 ,-20 ,120 ,-556 ,8 ,7 ,57 ,-10 ,-7419 ,-3139 ,-312 ,-7417 ,-95 ,0 ,6992 ,31 ,6219 ,-4491 ,-2108 ,4739 ,-434 ,-9714 ,83 ,977 ,-7960 ,-658 ,85 ,-33 ,4912 ,0 ,757], 20, 7)


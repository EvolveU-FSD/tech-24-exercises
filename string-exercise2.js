function reverseKey(cipherKey) {
    newKey = {} 
    for (c of Object.keys(cipherKey)) { 
        let substitutionValue = cipherKey[c]
        newKey[substitutionValue] = c 
    } 
    return newKey
}

function encrypt(stringValue, key) {
    let encrypted = ""; 
    for (const c of stringValue) {
        encrypted += key[c] || c; 
    }
    return encrypted; 
}

function testReverse(message, stringValue, cipherKey) {
    let cipherText = encrypt(stringValue, cipherKey)
    let decryptionKey = reverseKey(cipherKey)
    let actualValue = encrypt(cipherText, decryptionKey)

    if (actualValue === stringValue) {
        console.log('SUCCESS: ' + message)
    }
    else {
        console.log('FAILED: ' + message, 'expected reverse encrypted value of "' + stringValue +'" to be "' + stringValue + '" but received "' + actualValue +'"')
    }
}

testReverse('Empty string', '', { a:'b'})
testReverse('Empty cipher', 'hello', {})
testReverse('All letters encrypt', 'hello', {h:'i', e:'f', l:'m', o:'p'})
testReverse('some letters encrypt', 'hello', {h:'j' })
testReverse('punctuation not encrypted', 'hello there.', {h:'i', e:'f', l:'m', o:'p', t:'u', r: 's'})
testReverse('reverse key', 'ifmmp uifsf', {i:'h', f:'e', m:'l', p:'o', u:'t', s: 'r'})
// testEncrypt('multiple substitution values', 'hello', {h:'j', h: 'z', h:'s' })

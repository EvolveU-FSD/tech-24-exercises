function encrypt(stringValue, key) {
    let encrypted = ""; 
    for (const c of stringValue) {
        encrypted += key[c] || c; 
    }
    return encrypted; 
}

function testEncrypt(message, stringValue, cipherKey, expectedValue) {
    let actualValue = encrypt(stringValue, cipherKey)
    if (actualValue === expectedValue) {
        console.log('SUCCESS: ' + message)
    }
    else {
        console.log('FAILED: ' + message, 'expected encrypted value of "' + stringValue +'" to be "' + expectedValue + '" but received "' + actualValue +'"')
    }
}

testEncrypt('Empty string', '', { a:'b'}, '')
testEncrypt('Empty cipher', 'hello', {}, 'hello')
testEncrypt('All letters encrypt', 'hello', {h:'i', e:'f', l:'m', o:'p'}, 'ifmmp')
testEncrypt('some letters encrypt', 'hello', {h:'j' }, 'jello')
testEncrypt('punctuation not encrypted', 'hello there.', {h:'i', e:'f', l:'m', o:'p', t:'u', r: 's'}, 'ifmmp uifsf.')
testEncrypt('reverse key', 'ifmmp uifsf', {i:'h', f:'e', m:'l', p:'o', u:'t', s: 'r'}, 'hello there')
// testEncrypt('multiple substitution values', 'hello', {h:'j', h: 'z', h:'s' }, ??? )

function binaryAgent(str) {
    //Match numbers in the string.
    var regex = /\d+/g;
    var byte = str.match(regex);
    //Convert the binary from char code.
    var byteCode = byte.map(x => String.fromCharCode(parseInt(x, 2)));
    return byteCode.join('');
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
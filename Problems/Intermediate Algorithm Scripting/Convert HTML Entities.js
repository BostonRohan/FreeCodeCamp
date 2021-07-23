function convertHTML(str) {
    var temp = str;
    var mapObj = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;',
    };
    //Map over the object and replace all keys, with the respective value.
    for (var key in mapObj) {
        str = str.replaceAll(key, mapObj[key]);
    }
    //Replace the &.
    if (temp.includes('&')) {
        str = str.replace(/&/g, '&amp;');
    }
    return str;
}
convertHTML("Dolce & Gabbana");
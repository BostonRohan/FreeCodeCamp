function spinalCase(str) {
    var newStr;
    var spacingRegex = /([a-z])([A-Z])/g;
    var underscoreRegex = /\_/g;
    if (str.match(spacingRegex)) {
        str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    } else if (str.match(underscoreRegex)) {
        str = str.replace(underscoreRegex, '-');
    }
    newStr = str.replace(/\s/g, '-').toLowerCase();
    return newStr;
}
spinalCase("thisIsSpinalTap");
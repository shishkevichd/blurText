exports.blurText = function(text, blurSymbol="░") {
    const words = text.split(' ');

    return words.map(word => blurSymbol.repeat(word.length)).join(' ');
}
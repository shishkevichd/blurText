export default function blurText(text, blurSymbol="░") {
    const words = text.split(' ');

    const blurredWords = words.map(word => blurSymbol.repeat(word.length));

    return blurredWords.join(' ');
}
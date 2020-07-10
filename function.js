

export function countsAsAYes(word) {
    const firstLetter = word.charAt(0);
    const justFirst = firstLetter.toLowerCase();
    if (justFirst === 'y') {
        return true;
    }
    return false;
}
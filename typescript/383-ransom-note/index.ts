// first attempt
// Beats: Runtime 0% / Memory 0%

function canConstruct(ransomNote: string, magazine: string): boolean {
    const word = ransomNote.split('').sort()
    const dictionary = magazine.split('').sort()
    const res = word.filter((letter) => {
        const foundLetterIndex = dictionary.indexOf(letter)
        if (foundLetterIndex !== -1) {
            dictionary.splice(foundLetterIndex, 1)
            return false
        }
        return true
    })
    return res.length <= 0
};
                         
// second attempt
// Beats: Runtime 33.77% / Memory 34.01%
// Optimization: Removed unecessary sort

function canConstruct2(ransomNote: string, magazine: string): boolean {
    const word = ransomNote.split('')
    const dictionary = magazine.split('')
    const res = word.filter((letter) => {
        const foundLetterIndex = dictionary.indexOf(letter)
        if (foundLetterIndex !== -1) {
            dictionary.splice(foundLetterIndex, 1)
            return false
        }
        return true
    })
    return res.length <= 0
};

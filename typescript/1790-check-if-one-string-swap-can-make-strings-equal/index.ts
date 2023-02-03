// first attempt
// Beats: Runtime 44.20% / Memory 28.99%

function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1.length === 2) {
        return s1[1] === s2[0] && s1[0] === s2[1]
    }
    let samePlacementLetters = 0
    const differenceIndex = []
    let i = 0
    for (let letter of s1) {
        if (letter === s2[i]) {
            samePlacementLetters++
        } else {
            differenceIndex.push(i)
        }
        i++
    }
    if (samePlacementLetters >= (s1.length-2)) {
        if (differenceIndex.length) {
            const replaced = s1.split('')
            const oldLetter = s1[differenceIndex[0]]
            replaced.splice(differenceIndex[0], 1, s1[differenceIndex[1]])
            replaced.splice(differenceIndex[1], 1, oldLetter)
            const isStringEqualAfterSwap = s2 === replaced.join('')
            return isStringEqualAfterSwap
        }

        return true
    }
    
    return false
};

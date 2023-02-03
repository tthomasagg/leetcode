// first attempt
// Beats: Runtime 42.98% / Memory 20.91%

const romanLetters = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
const romanNumbers = [1, 5, 10, 50, 100, 500, 1000]

const isSubtractionCase = (value, nextValue) => {
    if (value === 'I' && (nextValue === 'V' || nextValue === 'X')) {
        return true
    }
    if (value === 'X' && (nextValue === 'L' || nextValue === 'C')) {
        return true
    }
    if (value === 'C' && (nextValue === 'D' || nextValue === 'M')) {
        return true
    }

    return false
}

const mapRoman = (value, nextValue) => {
    if (isSubtractionCase(value, nextValue)) {
        if (nextValue == 'V' || nextValue === 'X') {
            return nextValue === 'V' ? 4 : 9
        }
        if (nextValue === 'L' || nextValue === 'C') {
            return nextValue === 'L' ? 40 : 90    
        }

        return nextValue === 'D' ? 400 : 900
    }

    return romanNumbers[romanLetters.indexOf(value)]
}

function romanToInt(s: string): number {
    const romanString = s.split('')
    const ret = romanString.map((val, i, arr) => {
        const nextValue = arr?.[i+1] || ''
        const previousValue = arr?.[i-1] || ''
        if (isSubtractionCase(previousValue, val)) {
            return
        }
        const mappedNumber = mapRoman(val, nextValue)
        return mappedNumber
    })
    const cleanRet = ret.filter(Boolean)
    return cleanRet.reduce((acc, curr) => acc + curr)
};

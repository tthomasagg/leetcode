/*

| #    | Title                                                                                                                                             | Solution                                                                                                                                        | Difficulty |
 | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
 | 1768 | [Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/) | [Typescript](https://github.com/tthomasagg/leetcode/blob/main/typescript/1768-merge-strings-alternately/index.ts) | Easy |

* */

function mergeAlternately(word1: string, word2: string): string {
    const lengthOfSmaller = word1.length > word2.length ? word2.length : word1.length
    let newWord = []
    for (let i = 0; i < lengthOfSmaller; i++) {
        newWord.push(word1[i], word2[i])
    }
    const biggestWord = word1.length === lengthOfSmaller ? word2 : word1
    if (word1.length !== word2.length) {
        newWord.push(biggestWord.slice(lengthOfSmaller))
    }
    return newWord.join('')
};
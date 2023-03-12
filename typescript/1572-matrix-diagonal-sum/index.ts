/*
*
 | #    | Title                                                                                                                                             | Solution                                                                                                                                        | Difficulty |
 | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
 | 1572 | [Matrix Diagonal Sum](https://leetcode.com/problems/matrix-diagonal-sum/) | [Typescript](https://github.com/tthomasagg/leetcode/blob/main/typescript/1572-matrix-diagonal-sum/index.ts) | Easy |
*
* */

function diagonalSum(mat: number[][]): number {
    if (mat.length === 1) {
        return mat[0][0]
    }
    const middleIndex = Math.floor(mat.length/2)
    const middleNumber = mat.length % 2 !== 0 ? mat[middleIndex][middleIndex] : 0
    const sum = mat.reduce((acc, init, inI, arr) => init[inI] + init[arr.length - 1 - inI] + acc, 0) - middleNumber
    return sum
};
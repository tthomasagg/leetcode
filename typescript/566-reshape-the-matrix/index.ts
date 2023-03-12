/*

| #    | Title                                                                                                                                             | Solution                                                                                                                                        | Difficulty |
 | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
 | 566 | [Reshape The Matrix](https://leetcode.com/problems/reshape-the-matrix/) | [Typescript](https://github.com/tthomasagg/leetcode/blob/main/typescript/566-reshape-the-matrix/index.ts) | Easy |

* */

function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    const originalRows = mat.length
    const originalColumns = (mat?.[0]?.length || 1)
    if (r * c !== originalRows * originalColumns || (c === originalColumns && r === originalRows)) {
        return mat
    }
    const flatten = mat.flat()
    if (r === 1) {
        return [flatten]
    }
    return Array(r).fill(null).map((el, i) => Array(c).fill(null).map((ele, j, arrJ) => flatten[(arrJ.length * i) + j]))
};
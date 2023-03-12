/**
 Do not return anything, modify nums in-place instead.

 | #    | Title                                                                                                                                             | Solution                                                                                                                                        | Difficulty |
 | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
 | 283 | [Move Zeroes](https://leetcode.com/problems/move-zeroes/) | [Typescript](https://github.com/tthomasagg/leetcode/blob/main/typescript/283-move-zeroes/index.ts) | Easy |

 */
function moveZeroes(nums: number[]): void {
    nums.sort((a,b) => a+b === a ? -1 : 1)
};
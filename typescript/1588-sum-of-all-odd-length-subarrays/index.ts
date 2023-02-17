// first attempt
// Beats: Runtime 24.27% / Memory 9.7%
/*
| #    | Title                                                                                                                                             | Solution                                                                                                                                        | Difficulty |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| 1588 | [Sum of All Odd Length Subarrays](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/) | [Typescript](https://github.com/tthomasagg/leetcode/blob/main/typescript/1588-sum-of-all-odd-length-subarrays/index.ts) | Easy |
* */

function sumOddLengthSubarrays(arr: number[]): number {
    let subarr = []
    if (arr.length === 1) return arr[0]
    arr
        .forEach((el, index) => {
            arr.forEach((el, i) => {
                const sub = arr.slice(i, index + 1)
                if (sub.length % 2 !== 0) {
                    subarr.push(sub.reduce((acc, init) => acc + init))
                }
            })
    })
    return subarr.reduce((curr, init) => curr + init)
};

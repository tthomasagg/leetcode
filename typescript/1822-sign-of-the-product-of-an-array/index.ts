// first attempt
// Beats: Runtime 100% / 15.45%

function arraySign(nums: number[]): number {
    const prod = nums.reduce((acc, curr) => { if (curr == 0) {
        if (acc === Infinity || acc === -Infinity) {
            return 0
        }
    } ; return acc * curr}, 1)
    return prod === 0 ? 0 : prod > 0 ? 1 : -1
};

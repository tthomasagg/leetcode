// first attempt
// Beats: Runtime 78.45% / Memory 51.99%

function containsDuplicate(nums: number[]): boolean {
    return nums.length !== (new Set(nums)).size
};

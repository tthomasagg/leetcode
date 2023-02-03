// first attempt
// Beats: Runtime 61.07% / Memory 61.83%

function largestPerimeter(nums: number[]): number {
    nums.sort((a,b) => b-a)
    let solution = 0
    for (let i = 1; i < nums.length; i++) {
        if ((nums[i-1] < (nums[i]) + nums[i+1])) {
            solution = nums[i-1] + nums[i] + nums[i + 1]
            break
        }
    }
    return solution
};

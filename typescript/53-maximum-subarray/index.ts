// first attempt
// Beats: Runtime 23.79% / Memory 28.86%

function maxSubArray(nums: number[]): number {
    //Kadane algorithm
    let localMax = 0
    let globalMax = -Infinity
    for (let i = 0; i < nums.length; i++) {
        localMax = Math.max(nums[i], nums[i] + localMax)
        if (localMax > globalMax) {
            globalMax = localMax
        }
    }
    return globalMax
}

// original attempt
function maxSubArray(nums: number[]): number {
  let subarr = []
  const sortDesc = (a, b) => a > b ? -1 : 1
  if (nums.length === 1) return nums[0]
  const a = [...Array(nums.length)]
      .map((a, i) => i+1)
      .forEach((el, index) => {
          nums.forEach((el, i) => {
              const sub = nums.slice(i, index + 1)
              if (sub.length > 1) {
                  subarr.push(sub.reduce((acc, init) => acc + init))
              }
          })
  })
  const greatest = subarr.sort(sortDesc)[0]
  if (nums.some((el) => el > greatest)) {
      return nums.sort(sortDesc)[0]
  } else {
      return greatest
  }
}

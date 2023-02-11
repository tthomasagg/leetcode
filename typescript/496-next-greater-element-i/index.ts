// first atempt
// Beats: Runtime 91.44% / Memory 13.9%

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    return nums1.map((num) => {
        const indexOfNum = nums2.indexOf(num)
        const nextGreaterIndex = nums2.slice(indexOfNum).findIndex((num2) => num2 > num)
        return nextGreaterIndex > 0 ? nums2[nextGreaterIndex+indexOfNum] : -1
    })
};

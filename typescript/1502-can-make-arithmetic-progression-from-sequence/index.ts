// first attempt
// Beats: Runtime 75.68% / Memory 67.57%

function canMakeArithmeticProgression(arr: number[]): boolean {
    arr.sort((a,b) => a-b)
    const diff = arr[1] > arr[0] ? arr[1] - arr[0] : arr[0] - arr[1]
    const isItProgressive = arr.every((num, i, arr) => arr[i+1] !== undefined ? arr[i] + diff === arr[i+1] : true)
    return isItProgressive
};

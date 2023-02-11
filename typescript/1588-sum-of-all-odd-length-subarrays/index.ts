// first attempt
// Beats: Runtime 24.27% / Memory 9.7%

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

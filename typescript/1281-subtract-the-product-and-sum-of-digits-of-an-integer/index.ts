// first attempt
// Beats: Runtime 73.66% / Memory 60.98%

function subtractProductAndSum(n: number): number {
    const arr = (n+'').split('').map((letter) => +letter)
    const getProduct = (acc, init) => acc * init
    const getSum = (acc, init) => acc + init
    return arr.reduce(getProduct) - arr.reduce(getSum)
};

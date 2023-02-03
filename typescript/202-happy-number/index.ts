// first attempt
// Beats: Runtime 91.32% / Memory 34.72%

function isHappy(n: number): boolean {
    let it = 0
    const calculateHappyNum = (n) => {
        it++
        if (it > 8) {
            return false
        }
        if (n === 1) {
            return true
        } else {
            const nextNum = (n+'').split('').reduce((acc, curr) => ((+curr) ** 2) + (+acc),0)
            return calculateHappyNum(nextNum)
        }
    }

    return calculateHappyNum(n)
};

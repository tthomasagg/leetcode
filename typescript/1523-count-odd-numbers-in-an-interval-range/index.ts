// first attempt
// Beats: Runtime 11.76% / Memory 57.98%

function countOdds(low: number, high: number): number {
    let countOdd = 0
    for (let i = low; i <= high; i++) {
        if (i % 2 !== 0) {
            countOdd++
        }
    }
    return countOdd
};
                               
// second attempt
// Beats: Runtime 53.78% / Memory 98.32%

function countOdds2(low: number, high: number): number {
    return ((high-low) / 2)+(low % 2 !== 0 && high % 2 !== 0 ? 1 : 0)
};

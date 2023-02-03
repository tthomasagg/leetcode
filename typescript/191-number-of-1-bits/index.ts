// first attempt
// Beats: Runtime 96.49% / Memory 44.96%

function hammingWeight(n: number): number {
    return (n).toString(2).match(/1/g)?.length || 0
};

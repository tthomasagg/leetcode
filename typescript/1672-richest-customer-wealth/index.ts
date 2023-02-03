// first attempt
// Beats: Runtime 60.06% / Memory 29.42%

function maximumWealth(accounts: number[][]): number {
    const richest = accounts.flatMap((acc) => acc.reduce((acc, curr) => acc + curr, 0))
    richest.sort((a,b) => b-a)
    return richest[0] || 0
};

// second attempt
// Beats: Runtime 87.64% / Memory 10.72%

function maximumWealth2(accounts: number[][]): number {
    return Math.max(...accounts.flatMap((acc) => acc.reduce((acc, curr) => acc + curr, 0)))
};

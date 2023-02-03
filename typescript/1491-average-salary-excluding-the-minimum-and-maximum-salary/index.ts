// first attempt
// Beats: Runtime 47.16% / Memory 37.55%

function average(salary: number[]): number {
    salary.sort((a,b) => b-a)
    salary.shift()
    salary.pop()
    return salary.reduce((acc, init) => acc+init)/salary.length
};

// second attempt
// Beats: Runtime 89.08% / Memory 88.65%

function average2(salary: number[]): number {
    const min = Math.min(...salary)
    const max = Math.max(...salary) + min
    return (salary.reduce((acc, init) => acc+init) - max)/(salary.length-2)
};

// first attempt
// Beats: Runtime 89.29% / Memory 30%

function checkStraightLine(coordinates: number[][]): boolean {
    const y2 = coordinates[1][1]
    const y1 = coordinates[0][1]
    const x2 = coordinates[1][0]
    const x1 = coordinates[0][0]
    const yEqualQ = coordinates.every(([x, y], i, arr) => y - arr[i === arr.length - 1 ? i-1 : i+1][1] === (y2-y1))
    const xEqualP = coordinates.every(([x, y], i, arr) => x - arr[i === arr.length - 1 ? i-1 : i+1][0] === (x2-x1))

    if (yEqualQ || xEqualP) {
        return true
    }

    const firstGradient = (y2 - y1) / ((x2 - x1) || 1)

    const coord = coordinates.slice(0, coordinates.length-1)
    return coord.every((xy, i) => {
        const x = xy[0]
        const y = xy[1]
        const y2 = coordinates[i+1][1]
        const x2 = coordinates[i+1][0]
        const currentGradient = (y2 - y) / ((x2 - x) || 1)
        return currentGradient === firstGradient
    })
};

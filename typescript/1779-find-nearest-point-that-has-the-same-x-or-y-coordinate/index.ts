// first attempt
// Beats: Runtime 0% / Memory 0%

function nearestValidPoint(x: number, y: number, points: number[][]): number {
    const filteredPoints = points.filter(([px, py]) => px === x || py === y)
    const mappedPoints = points.map(([px, py], i) => ({[i]: filteredPoints.find(([fx, fy]) => fx === px && fy === py)})).filter((a) => !!Object.values(a)[0])
    const manhattanDistances = filteredPoints.map(([fx, fy]) => Math.abs(fx - x) + Math.abs(fy - y))
    const indexOfMin = manhattanDistances.findIndex((dist) => dist === Math.min(...manhattanDistances))
    return !manhattanDistances.length ? -1 : +Object.keys(mappedPoints?.[indexOfMin] || {})?.[0]
};

// second attempt
// Beats: Runtime 73.60% / Memory 64.80%

function nearestValidPoint(x: number, y: number, points: number[][]): number {
    const distances = points.map(([fx, fy]) => fx === x || fy === y ? Math.abs(fx - x) + Math.abs(fy - y) : Infinity)
    const minDistance = Math.min(...distances)
    if (minDistance === Infinity) return -1
    return distances.indexOf(minDistance)
};

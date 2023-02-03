// first attepmt
// Beats: Runtime 0% / Memory 14.99%

function findJudge(n: number, trust: number[][]): number {
    if (trust.length === 0 && n === 1) {
        return 1
    }
    const asOthers = new Set(trust.map((node) => node[0]))
    const asJudges = new Set(trust.map((node) => node[1]))
    if (asOthers.size < n-1) {
        return -1
    }
    let peopleTrustInJudge = {}
    for (const judge of asJudges) {
        peopleTrustInJudge[judge] = trust.filter((node) => node[1] === judge).map((entry) => entry[0]).flat()
    }
    const peersSize = asOthers.size
    let judgeTrustedByAll = -1
    for (const judge of asJudges) {
        const currPeopleTrustedByJudge = new Set(peopleTrustInJudge[judge])
        const unionOfAllPeers = new Set(...[peopleTrustInJudge[judge], Array.from(asOthers.values())])
        if (currPeopleTrustedByJudge.size === peersSize && unionOfAllPeers.size === peersSize) {
            judgeTrustedByAll = judge
            break
        }
    }
    return judgeTrustedByAll
};

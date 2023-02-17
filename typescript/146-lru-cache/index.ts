/*
| #    | Title                                                                                                                                             | Solution                                                                                                                                        | Difficulty |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| 146 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | [Typescript](https://github.com/tthomasagg/leetcode/blob/main/typescript/146-lru-cache/index.ts) | Medium |
* */

type CacheType = Map<number, number>

class LRUCache {
    private _capacity: number
    private _cache: CacheType = new Map()
    private _cacheKeys: number[] = []
    private _lruRank: number[]
    private _iteration: number = 0

    constructor(capacity: number) {
        this.capacity = capacity
        this.lruRank = Array(capacity).fill(-Infinity)
    }

    get(key: number): number {
        const foundEntry = this.cache.get(key)
        if (foundEntry === undefined) {
            return -1
        }
        this.updateLRURank(foundEntry)
        this.iteration = 1
        return foundEntry
    }

    put(key: number, value: number): void {
        this.updateCache(key, value)
        this.iteration = 1
    }

    findEntryByKey(key: number): number {
        return this.cache.get(key)
    }

    getLRUIndex () {
        const lruNumber = Math.min(...this.lruRank)
        return this.lruRank.findIndex((e) => e === lruNumber)
    }

    updateLRURank (currentEntry: number, withIndex?: number) {
        if (withIndex) {
            this.lruRank[withIndex] = this.iteration
        } else {
            const index = Array.from(this.cache.keys()).findIndex((entry) => entry === currentEntry)
            if (index >= 0) {
                this.lruRank[index] = this.iteration
            }
        }
    }

    updateCache (entryKey: number, entryValue: number) {
        const existingEntry = this.cache.get(entryKey)
        console.log({ existingEntry, entryKey })
        if (existingEntry >= 0) {
            this._cacheKeys[existingEntry] = entryKey
            this.cache.set(existingEntry, entryValue)
            this.updateLRURank(existingEntry)
        } else {
            let lruIndex = this.getLRUIndex()
            if (this.isAtMaxCapacity()) {
                const lruMappedEntry = Array.from(this.cache.entries())[lruIndex][0]
                this.cache.delete(lruMappedEntry)
                this.cache.set(entryKey, entryValue)
                this._cacheKeys[lruIndex] = entryKey
            } else {
                this.cache.set(entryKey, entryValue)
            }
            this.updateLRURank(entryKey, lruIndex)
        }
    }

    isAtMaxCapacity(): boolean {
        return this.cache.size >= this.capacity
    }

    updateCacheKeys(cache: CacheType) {
        this.cacheKeys = [...cache.keys()]
    }

    set lruRank(rank: number[]) {
        this._lruRank = rank
    }

    get lruRank(): number[] {
        return this._lruRank
    }

    set capacity(capacity: number) {
        this._capacity = capacity
    }

    get capacity(): number {
        return this._capacity
    }

    set cache(cache: CacheType) {
        this.updateCacheKeys(cache)
        this._cache = cache
    }

    get cache(): CacheType {
        return this._cache
    }

    set cacheKeys(cacheKeys: number[]) {
        this._cacheKeys = cacheKeys
    }

    get cacheKeys(): number[] {
        return this._cacheKeys
    }

    set iteration(i: number) {
        this._iteration += i
    }

    get iteration(): number {
        return this._iteration
    }
}
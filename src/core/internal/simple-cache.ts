import {
    type Entity,
    type Manager,
} from "../classes/index.js";
import {
    CacheFactory,
    SyncCacheLayer,
    type CacheLayer,
} from "../injectable/index.js";

/** @internal */
class SimpleCacheLayer<K, V extends Entity<any>> extends SyncCacheLayer<K, V> {

    constructor(
        private readonly map: Map<K, V>,
        manager: Manager<K, V>, 
        holds: string,
    ) {
        super(manager, holds);
    }

    public get(key: K): V | undefined {
        return this.map.get(key);
    }

    public set(key: K, value: V): this {
        this.map.set(key, value);
        return this;
    }

    public delete(key: K): boolean {
        return this.map.delete(key);
    }

    public clear(): void {
        this.map.clear();
    }

    public forEach(
        callbackfn: (value: V, key: K, map: Map<K, V>) => void,
        thisArgument?: any
    ): void {
        // eslint-disable-next-line unicorn/no-array-for-each, unicorn/no-array-callback-reference, unicorn/no-array-method-this-argument
        this.map.forEach(callbackfn, thisArgument);
    }

    public has(key: K): boolean {
        return this.map.has(key);
    }

    public getSize(): number {
        return this.map.size;
    }

    public entries(): IterableIterator<[K, V]> {
        return this.map.entries();
    }

    public keys(): IterableIterator<K> {
        return this.map.keys();
    }

    public values(): IterableIterator<V> {
        return this.map.values();
    }

    public [Symbol.iterator](): IterableIterator<[K, V]> {
        return this.map[Symbol.iterator]();
    }
}

/** @internal */
export class SimpleCacheFactory extends CacheFactory {
    private readonly maps = new Map<string, Map<any, Entity<any>>>();

    public async getCacheLayer<K, V extends Entity<any>>(
        manager: Manager<K, V>,
        holds: string
    ): Promise<CacheLayer<K, V>> {
        const map = this.getMap(holds);
        return new SimpleCacheLayer(map, manager, holds);
    }

    private getMap(name: string): Map<any, any> {
        const map = this.maps.get(name);
        if (map) return map;
        const freshMap = new Map();
        this.maps.set(name, freshMap);
        return freshMap;
    }
}

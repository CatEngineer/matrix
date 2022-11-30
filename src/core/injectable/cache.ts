import type { Entity, Manager } from "../../internal/index.js";

/** @internal */
export type CacheLayer<K, V extends Entity<any>> = AsyncCacheLayer<K, V> | SyncCacheLayer<K, V>;

export abstract class AsyncCacheLayer<K, V extends Entity<any>> {
    constructor(protected readonly manager: Manager<K, V>, protected readonly holds: string) {}
    public abstract get(key: K): Promise<V | undefined>;
    public abstract set(key: K, value: V): Promise<void>;
    public abstract delete(key: K): Promise<void>;
    public abstract clear(): Promise<void>;
    public abstract forEach(callbackfn: (value: V, key: K, map: AsyncCacheLayer<K, V>) => void, thisArgument?: any): Promise<void>;
    public abstract has(key: K): Promise<boolean>;
    public abstract getSize(): Promise<number>;
    public abstract entries(): Promise<IterableIterator<[K, V]>>;
    public abstract keys(): Promise<IterableIterator<K>>;
    public abstract values(): Promise<IterableIterator<V>>;
    public abstract [Symbol.iterator](): Promise<IterableIterator<[K, V]>>;
}

export abstract class SyncCacheLayer<K, V extends Entity<any>> {
    constructor(protected readonly manager: Manager<K, V>, protected readonly holds: string) {}
    public abstract get(key: K): V | undefined;
    public abstract set(key: K, value: V): this;
    public abstract delete(key: K): boolean;
    public abstract clear(): void;
    public abstract forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArgument?: any): void;
    public abstract has(key: K): boolean;
    public abstract getSize(): number;
    public abstract entries(): IterableIterator<[K, V]>;
    public abstract keys(): IterableIterator<K>;
    public abstract values(): IterableIterator<V>;
    public abstract [Symbol.iterator](): IterableIterator<[K, V]>;
}

export abstract class CacheFactory {
    public abstract getCacheLayer<K, V extends Entity<any>>(
        manager: Manager<K, V>,
        holds: string,
    ): Promise<CacheLayer<K, V>>;
}
